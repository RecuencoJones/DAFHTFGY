import { GithubController } from '../../../src/modules/github/github.controller'
import { EventBus } from '../../../src/modules/common/event-bus.component'

describe('GitHub Controller', () => {
  let ctrl: GithubController, eventBusMock: EventBus

  beforeEach(() => {
    eventBusMock = {
      emit: jest.fn()
    }

    ctrl = new GithubController(eventBusMock)
  })

  it('should send GITHUB_PUSH event on push webhook', () => {
    ctrl.receivePushEvent('push', {
      head_commit: { url: 'http://' }
    })

    expect(eventBusMock.emit).toHaveBeenCalledWith('github:push', {
      commit: 'http://'
    })
  })

  it('should ignore any other hook', () => {
    ctrl.receivePushEvent('issue', {})

    expect(eventBusMock.emit).not.toHaveBeenCalled()
  })
})
