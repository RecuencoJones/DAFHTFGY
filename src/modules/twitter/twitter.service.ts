import { Component } from '@nestjs/common'
import { MessageType } from '../../enum/message-type'
import { MessageService } from '../message/message.service'
import { TwitterClient } from './twitter-client.component'
import { Logger } from '../common/logger.component'

@Component()
export class TwitterService {
  constructor(
    private readonly messageService: MessageService,
    private readonly twitterClient: TwitterClient,
    private readonly logger: Logger
  ) {}

  /**
   * Post a new tweet
   *
   * @param type
   */
  tweet(type: MessageType, url?) {
    let message = this.messageService.generate(type)

    if (url) {
      message = message.concat(`\n\n${url}`)
    }

    this.logger.debug(message)
    this.twitterClient.tweet(message)
  }
}
