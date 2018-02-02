import { Controller, Post, Body } from '@nestjs/common'
import { EventTypes } from '../../enum/event-types'
import { EventBus } from '../common/event-bus.component'

@Controller('github')
export class GithubController {
  constructor(private readonly eventBus: EventBus) {}

  /**
   * Receive push webhook
   *
   * @param data - GitHub event
   */
  @Post('push')
  receivePushEvent(@Body() data) {
    if (data.action.toLowerCase() === 'push') {
      this.eventBus.emit(EventTypes.GITHUB_PUSH, data)
    }
  }
}
