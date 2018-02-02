import { Controller, Post, Body, Headers } from '@nestjs/common'
import { EventTypes } from '../../enum/event-types'
import { EventBus } from '../common/event-bus.component'

const GITHUB_EVENT_HEADER = 'X-GitHub-Event'.toLowerCase()

@Controller('github')
export class GithubController {
  constructor(private readonly eventBus: EventBus) {}

  /**
   * Receive push webhook
   *
   * @param data - GitHub event
   */
  @Post('push')
  receivePushEvent(@Headers(GITHUB_EVENT_HEADER) event, @Body() data) {
    if (event === 'push') {
      this.eventBus.emit(EventTypes.GITHUB_PUSH, {
        commit: data.head_commit.url
      })
    }
  }
}
