import { CronService } from '../../../../../src/modules/cron/cron.service'
import { EventBus } from '../../../../../src/modules/common/event-bus.component'
import { Env } from '../../../../../src/modules/common/env.component'

describe('Cron Service', () => {
  let cronService: CronService, eventBusMock: EventBus, envMock: Env

  beforeAll(() => {
    jest.useFakeTimers()
  })

  afterAll(() => {
    jest.useRealTimers()
  })

  beforeEach(() => {
    eventBusMock = { emit: jest.fn() }

    envMock = { get: () => '* * * * * *' }

    cronService = new CronService(eventBusMock, envMock)
  })

  it('should send CRON_TICK event after given cron expression', () => {
    jest.advanceTimersByTime(1000)

    expect(eventBusMock.emit).toHaveBeenCalledWith('cron:tick')
  })
})
