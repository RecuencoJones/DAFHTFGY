import { GithubController } from '../../../../../src/modules/github/github.controller'
import { EventBus } from '../../../../../src/modules/common/event-bus.component'
import { GithubService } from '../../../../../src/modules/github/github-service.component'

describe('GitHub Controller', () => {
  let ctrl: GithubController, eventBusMock: EventBus, githubServiceMock: GithubService

  beforeEach(() => {
    eventBusMock = {
      emit: jest.fn()
    }

    githubServiceMock = {
      verifySignature: jest.fn(() => true)
    }

    ctrl = new GithubController(eventBusMock, githubServiceMock)
  })

  it('should send GITHUB_PUSH event on push webhook', () => {
    ctrl.receivePushEvent('push', 'sha1', {
      head_commit: { url: 'http://' }
    })

    expect(eventBusMock.emit).toHaveBeenCalledWith('github:push', {
      commit: 'http://'
    })
  })

  it('should ignore any other hook', () => {
    ctrl.receivePushEvent('issue', 'sha1', {})

    expect(eventBusMock.emit).not.toHaveBeenCalled()
  })

  it('should ignore if signature is not valid', () => {
    githubServiceMock.verifySignature = jest.fn(() => false)

    ctrl.receivePushEvent('push', 'invalid', {
      head_commit: { url: 'http://' }
    })

    expect(eventBusMock.emit).not.toHaveBeenCalled()
  })
})
