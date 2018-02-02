import { MessageService } from '../../../src/modules/twitter/message-service.component'
import { MessageType } from '../../../src/enum/message-type';

const messages = require('../../../assets/no.json')

describe('Message Service', () => {
  let service: MessageService, randomMock

  beforeEach(() => {
    randomMock = { next: jest.fn() }

    service = new MessageService(randomMock)
  })

  it('should pick first random no message when r = 0', () => {
    randomMock.next = jest.fn(() => 0)

    const msg = service.generate(MessageType.NO)

    expect(msg).toEqual(messages[0].text)
  })

  it('should pick last random no message when r = 1', () => {
    randomMock.next = jest.fn(() => 1)

    const msg = service.generate(MessageType.NO)

    expect(msg).toEqual(messages[messages.length - 1].text)
  })
})
