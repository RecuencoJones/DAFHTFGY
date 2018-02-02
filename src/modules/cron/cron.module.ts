import { Module } from '@nestjs/common'
import { Common } from '../common/common.module'
import { CronService } from './cron.service'

@Module({
  imports: [Common],
  components: [CronService]
})
export class Cron {}
