import { beforeEach, describe, expect, it } from 'vitest'

import { InMemoryCheckInsRepository } from '@/repositories/in-memory/in-memory-check-ins-repository'
import { CheckInService } from './check-in'

let checkInsRepository: InMemoryCheckInsRepository
let sut: CheckInService

describe('Check in Service', () => {
  beforeEach(() => {
    checkInsRepository = new InMemoryCheckInsRepository()
    sut = new CheckInService(checkInsRepository)
  })

  it('should be able to check in', async () => {
    const { checkIn } = await sut.execute({
      gymId: 'gym-01',
      userId: 'gym-01',
    })

    expect(checkIn.id).toEqual(expect.any(String))
  })
})
