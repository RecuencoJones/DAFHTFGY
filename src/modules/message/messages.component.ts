import { MessageType } from '../../enum/message-type'
import { MessageOptions } from '../../types/messages'

export class Messages {
  public messages: MessageOptions = {
    [MessageType.YES]: require('../../../assets/yes.json'),
    [MessageType.NO]: require('../../../assets/no.json')
  }

  getAll() {
    return this.messages
  }

  get(type: MessageType) {
    return this.messages[type]
  }
}
