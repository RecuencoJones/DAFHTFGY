import { Component } from '@nestjs/common'
import { MessageType } from '../../enum/message-type'
import { MessageOptions, MessageLikelihood } from '../../types/messages'

@Component()
export class MessageService {
  private messages: MessageOptions = {
    [MessageType.YES]: require('../../../assets/yes.json'),
    [MessageType.NO]: require('../../../assets/no.json')
  }

  generate(type: MessageType) {
    return this.pick(this.messages[type]).text
  }

  private pick(messages: Array<MessageLikelihood>) {
    const weights = messages.map(({weight}) => weight)
    const totalWeight = weights.reduce((accum, next) => accum + next, 0)
    const intervals = weights.map((weight, index, array) => index ? weight + array[index - 1] : weight)
    const rand = Math.round(Math.random() * totalWeight)
    const selected = intervals.findIndex((intervalUpperLimit) => rand <= intervalUpperLimit)

    return messages[selected]
  }
}
