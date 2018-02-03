import * as Twitter from 'twitter'
import { Component } from '@nestjs/common'
import { Env } from '../common/env.component'
import { Logger } from '../common/logger.component'

@Component()
export class TwitterClient {
  private twitter: Twitter

  constructor(private readonly env: Env, private readonly logger: Logger) {
    const keys = {
      consumer_key: this.env.get('consumer_key'),
      consumer_secret: this.env.get('consumer_secret'),
      access_token_key: this.env.get('access_token_key'),
      access_token_secret: this.env.get('access_token_secret')
    }

    this.twitter = new Twitter(keys)
  }

  /**
   * Send a new tweet via Twitter API
   *
   * @param message - new status
   */
  tweet(message) {
    this.twitter.post('statuses/update', {
      status: message
    }, (error, tweet) => {
      if (error) {
        console.error(error)
      } else {
        this.logger.debug('Tweeted!', tweet.id)
      }
    })
  }
}
