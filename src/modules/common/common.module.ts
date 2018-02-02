import { Module } from '@nestjs/common'
import { EventBus } from './event-bus.component'

@Module({
  components: [EventBus],
  exports: [EventBus]
})
export class Common {}
