import { Module } from '@nestjs/common'
import { GithubController } from './github.controller'
import { Common } from '../common/common.module'

@Module({
  imports: [Common],
  controllers: [GithubController]
})
export class Github {}
