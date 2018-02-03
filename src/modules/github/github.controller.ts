import { timingSafeEqual, createHmac } from 'crypto'
import { Controller, Post, Body, Headers } from '@nestjs/common'
import { EventTypes } from '../../enum/event-types'
import { EventBus } from '../common/event-bus.component'
import { GithubService } from './github-service.component'

const GITHUB_EVENT_HEADER = 'X-GitHub-Event'.toLowerCase()
const GITHUB_SIGNATURE_HEADER = 'X-Hub-Signature'.toLowerCase()

@Controller('github')
export class GithubController {
  constructor(
    private readonly eventBus: EventBus,
    private readonly githubService: GithubService
  ) {}

  /**
   * Receive push webhook
   *
   * @param data - GitHub event
   */
  @Post('push')
  receivePushEvent(@Headers(GITHUB_EVENT_HEADER) event, @Headers(GITHUB_SIGNATURE_HEADER) signature, @Body() data) {
    if (this.githubService.verifySignature(signature, data) && event === 'push') {
      this.eventBus.emit(EventTypes.GITHUB_PUSH, {
        commit: data.head_commit.url
      })
    }
  }
}
