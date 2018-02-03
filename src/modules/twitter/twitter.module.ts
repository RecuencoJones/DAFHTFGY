import { Module, Inject } from '@nestjs/common'
import { Common } from '../common/common.module'
import { Message } from '../message/message.module'
import { TwitterEvents } from './twitter-events.component'
import { TwitterService } from './twitter.service'
import { TwitterClient } from './twitter-client.component'

@Module({
  imports: [Common, Message],
  components: [TwitterEvents, TwitterService, TwitterClient]
})
export class Twitter {}
