import { Component } from '@nestjs/common'
import { MessageType } from '../../enum/message-type'
import { MessageService } from './message-service.component'
import { TwitterClient } from './twitter-client.component'

@Component()
export class TwitterService {
  constructor(
    private readonly messageService: MessageService,
    private readonly twitterClient: TwitterClient
  ) {}

  /**
   * Post a new tweet
   *
   * @param type
   */
  tweet(type: MessageType) {
    const message = this.messageService.generate(type)

    console.log(message)
    // twitterClient.tweet(message)
  }
}
