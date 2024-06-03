import { User } from '@prisma/client'

import { IUsersRepository } from '@/repositories/users-repository'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

interface IGetUserProfileServiceRequest {
  userId: string
}

interface IGetUserProfileServiceResponse {
  user: User
}

export class GetUserProfileService {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({
    userId,
  }: IGetUserProfileServiceRequest): Promise<IGetUserProfileServiceResponse> {
    const user = await this.usersRepository.findById(userId)

    if (!user) {
      throw new ResourceNotFoundError()
    }

    return { user }
  }
}
