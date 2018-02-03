import { Env } from '../../../../../src/modules/common/env.component'
import { createHmac } from 'crypto'
import { GithubService } from '../../../../../src/modules/github/github.service'

describe('Github Service', () => {
  let githubService: GithubService, envMock: Env, secret, payload, signature

  beforeEach(() => {
    secret = 'test'
    payload = '{"head_commit":{"url":"https://"}}'
    signature = `sha1=${createHmac('sha1', secret).update(payload).digest('hex')}`

    envMock = { get: () => secret }

    githubService = new GithubService(envMock)
  })

  it('should accept github signature', () => {
    expect(githubService.verifySignature(signature, {
      head_commit: {
        url: 'https://'
      }
    })).toBe(true)
  })

  it('should return false if secret is different', () => {
    envMock.get = () => 'secret'

    expect(githubService.verifySignature(signature, {
      head_commit: {
        url: 'https://'
      }
    })).toBe(false)
  })

  it('should return false if payload is different', () => {
    expect(githubService.verifySignature(signature, {
      head_commit: {
        url: 'http://'
      }
    })).toBe(false)
  })

  it('should return false if signature is different', () => {
    expect(githubService.verifySignature('fake-signature', {
      head_commit: {
        url: 'https://'
      }
    })).toBe(false)
  })
})
