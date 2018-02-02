import { Module } from '@nestjs/common'
import { Github } from './modules/github/github.module'
import { Cron } from './modules/cron/cron.module'
import { Twitter } from './modules/twitter/twitter.module'

@Module({
  imports: [Github, Cron, Twitter]
})
export class AppModule {}
