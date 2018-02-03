import { Controller, Get, Param } from '@nestjs/common'
import { MessageType } from '../../enum/message-type'
import { Messages } from './messages.component'
import { MessageService } from './message.service'

@Controller('messages')
export class MessageController {
  constructor(private readonly messages: Messages, private readonly messageService: MessageService) {}

  @Get('/')
  getMessages() {
    return this.messages.getAll()
  }

  @Get('/:type')
  getMessagesOfType(@Param('type') type: MessageType) {
    return this.messages.get(type)
  }

  @Get('/generate/:type')
  generateMessage(@Param('type') type: MessageType) {
    return this.messageService.generate(type)
  }
}
