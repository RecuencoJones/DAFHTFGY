import { Module, Inject } from '@nestjs/common'
import { Common } from '../common/common.module'
import { TwitterEvents } from './twitter-events.component'
import { TwitterService } from './twitter-service.component'
import { MessageService } from './message-service.component'
import { TwitterClient } from './twitter-client.component'

@Module({
  imports: [Common],
  components: [TwitterEvents, TwitterService, TwitterClient, MessageService]
})
export class Twitter {}
