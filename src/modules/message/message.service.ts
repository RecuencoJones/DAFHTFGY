import { Component } from '@nestjs/common'
import { MessageType } from '../../enum/message-type'
import { MessageOptions, MessageLikelihood } from '../../types/messages'
import { Random } from '../common/random.component'
import { Messages } from './messages.component'

@Component()
export class MessageService {
  constructor(private readonly messages: Messages, private readonly random: Random) {}

  generate(type: MessageType) {
    return this.pick(this.messages.get(type)).text
  }

  private pick(messages: Array<MessageLikelihood>) {
    const weights = messages.map(({weight}) => weight)
    const totalWeight = weights.reduce((accum, next) => accum + next, 0)
    const intervals = weights.reduce((accum, weight, index) => {
      accum.push(index ? weight + accum[index - 1] : weight)

      return accum
    }, [])
    const rand = Math.round(this.random.next() * totalWeight)
    const selected = intervals.findIndex((intervalUpperLimit) => rand <= intervalUpperLimit)

    return messages[selected]
  }
}
