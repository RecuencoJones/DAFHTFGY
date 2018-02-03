import { MessageOptions } from '../../../../../src/types/messages'
import { MessageType } from '../../../../../src/enum/message-type'
import { MessageService } from '../../../../../src/modules/message/message.service'
import { Messages } from '../../../../../src/modules/message/messages.component'
import { Random } from '../../../../../src/modules/common/random.component'

describe('Message Service', () => {
  let service: MessageService, messages: MessageOptions, messagesMock: Messages, randomMock: Random

  beforeEach(() => {
    messages = {
      [MessageType.YES]: [],
      [MessageType.NO]: []
    }

    messagesMock = { get: (type: MessageType) => messages[type] }

    randomMock = { next: jest.fn() }

    service = new MessageService(messagesMock, randomMock)
  })

  it('should pick first random no message when r = 0', () => {
    messages[MessageType.NO] = [{text: 'No', weight: 1}, {text: 'Niet', weight: 1}]
    randomMock.next = jest.fn(() => 0)

    const msg = service.generate(MessageType.NO)

    expect(msg).toEqual(messages[MessageType.NO][0].text)
  })

  it('should pick last random no message when r = 1', () => {
    messages[MessageType.NO] = [{text: 'No', weight: 1}, {text: 'Niet', weight: 1}]
    randomMock.next = jest.fn(() => 1)

    const msg = service.generate(MessageType.NO)

    expect(msg).toEqual(messages[MessageType.NO][1].text)
  })
})
