import { createHmac, timingSafeEqual } from 'crypto'
import { Component } from '@nestjs/common'
import { Env } from '../common/env.component'

@Component()
export class GithubService {
  constructor(
    private readonly env: Env
  ) {}

  verifySignature(signature, data) {
    const hexDigest = createHmac('sha1', this.env.get('github_secret'))
      .update(JSON.stringify(data))
      .digest('hex')

    const hash1 = Buffer.from(`sha1=${hexDigest}`, 'utf8')
    const hash2 = Buffer.from(signature, 'utf8')

    try {
      return timingSafeEqual(hash1, hash2)
    } catch (e) {
      return false
    }
  }
}
