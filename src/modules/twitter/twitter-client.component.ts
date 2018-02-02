import * as Twitter from 'twitter'
import { Component } from '@nestjs/common'

const keys = require('../../../assets/keys.json')

@Component()
export class TwitterClient {
  private twitter: Twitter

  constructor() {
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
        console.log('Tweeted!', tweet)
      }
    })
  }
}
