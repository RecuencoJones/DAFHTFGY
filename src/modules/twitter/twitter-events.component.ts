import { Component } from '@nestjs/common'
import { MessageType } from '../../enum/message-type'
import { EventTypes } from '../../enum/event-types'
import { EventBus } from '../common/event-bus.component'
import { TwitterService } from './twitter-service.component'

const HOURS_UNTIL_MIDDAY = 12
const HOUR_RANGE = 6
const HOUR_IN_MILLIS = 1000 * 60 * 60

@Component()
export class TwitterEvents {
  private sent = false
  private timeout

  constructor(private readonly eventBus: EventBus, private readonly twitterService: TwitterService) {
    this.eventBus.on(EventTypes.GITHUB_PUSH, this.handleYes.bind(this))
    this.eventBus.on(EventTypes.CRON_TICK, this.handleNo.bind(this))
  }

  handleYes() {
    // for consistency sake, do not tweet no today
    this.sent = true
    this.twitterService.tweet(MessageType.YES)
  }

  handleNo() {
    // daily reset
    this.timeout && clearTimeout(this.timeout)
    this.sent = false

    const delay = this.generateRandomDelay()

    this.timeout = setTimeout(() => {
      // race condition: he actually did something today!
      if (!this.sent) {
        this.twitterService.tweet(MessageType.NO)
      } else {
        console.warn('he actually did something!')
      }
    }, delay)
  }

  /**
   * Pick a random hour between 12:00 and 18:00
   */
  private generateRandomDelay(): number {
    return (Math.round(Math.random() * HOUR_RANGE) + HOURS_UNTIL_MIDDAY) * HOUR_IN_MILLIS
  }
}
