import { Checkin } from '@prisma/client'

import { ICheckInsRepository } from '@/repositories/check-ins-repository'

interface ICheckInServiceRequest {
  userId: string
  gymId: string
}

interface ICheckInServiceResponse {
  checkIn: Checkin
}

export class CheckInService {
  constructor(private checkInsRepository: ICheckInsRepository) {}

  async execute({
    userId,
    gymId,
  }: ICheckInServiceRequest): Promise<ICheckInServiceResponse> {
    const checkIn = await this.checkInsRepository.create({
      user_id: userId,
      gym_id: gymId,
    })

    return { checkIn }
  }
}
