import { schedule } from 'node-cron'
import { Component } from '@nestjs/common'
import { EventTypes } from '../../enum/event-types'
import { EventBus } from '../common/event-bus.component'
import { Env } from '../common/env.component'

@Component()
export class CronService {
  constructor(private readonly eventBus: EventBus, private readonly env: Env) {
    const interval = this.env.get('interval', '0 0 * * *')

    schedule(interval, this.notifyEachDay.bind(this))
  }

  /**
   * Send a tick event every day at 00:00
   */
  notifyEachDay() {
    this.eventBus.emit(EventTypes.CRON_TICK)
  }
}
