import { Module } from '@nestjs/common'
import { Common } from '../common/common.module'
import { MessageController } from './message.controller'
import { MessageService } from './message.service'
import { Messages } from './messages.component'

@Module({
  imports: [Common],
  controllers: [MessageController],
  components: [Messages, MessageService],
  exports: [MessageService]
})
export class Message {}
