import { schedule } from 'node-cron'
import { Component } from '@nestjs/common'
import { EventTypes } from '../../enum/event-types'
import { EventBus } from '../common/event-bus.component'

@Component()
export class CronService {
  private interval = {
    daily: '0 0 * * *',
    every30Seconds: '*/30 * * * * *'
  }

  constructor(private readonly eventBus: EventBus) {
    schedule(this.interval.daily, this.notifyEachDay.bind(this))
  }

  /**
   * Send a tick event every day at 00:00
   */
  notifyEachDay() {
    this.eventBus.emit(EventTypes.CRON_TICK)
  }
}
