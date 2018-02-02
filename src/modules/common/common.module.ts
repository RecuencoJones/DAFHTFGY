import { Module } from '@nestjs/common'
import { EventBus } from './event-bus.component'
import { Env } from './env.component'
import { Logger } from './logger.component'
import { Random } from './random.component'

@Module({
  components: [EventBus, Logger, Env, Random],
  exports: [EventBus, Logger, Env, Random]
})
export class Common {}
