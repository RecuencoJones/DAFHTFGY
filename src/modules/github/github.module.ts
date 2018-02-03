import { Module } from '@nestjs/common'
import { Common } from '../common/common.module'
import { GithubController } from './github.controller'
import { GithubService } from './github.service'

@Module({
  imports: [Common],
  controllers: [GithubController],
  components: [GithubService]
})
export class Github {}
