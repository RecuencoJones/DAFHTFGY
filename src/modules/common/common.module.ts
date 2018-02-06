import { Module } from '@nestjs/common'
import { StatusController } from './status.controller'
import { EventBus } from './event-bus.component'
import { Env } from './env.component'
import { Logger } from './logger.component'
import { Random } from './random.component'
import { SharedStorage } from './shared-storage.service'

@Module({
  controllers: [StatusController],
  components: [EventBus, Logger, Env, Random, SharedStorage],
  exports: [EventBus, Logger, Env, Random, SharedStorage]
})
export class Common {}
