import { Controller, Get } from '@nestjs/common'
import { SharedStorage } from './shared-storage.service'

@Controller('status')
export class StatusController {
  constructor(private readonly sharedStorage: SharedStorage) {}

  @Get('/health')
  getHealth() {
    return {status: 'UP'}
  }

  @Get('/nextTick')
  getNextTick() {
    return this.sharedStorage.get('nextTick')
  }
}
