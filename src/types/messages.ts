import { MessageType } from '../enum/message-type'

export type MessageLikelihood = {
  text: string
  weight: number
}

export type MessageOptions = {
  [key in MessageType]: Array<MessageLikelihood>
}
