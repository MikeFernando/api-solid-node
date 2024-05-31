import { Prisma, User } from '@prisma/client'
import { IUsersRepository } from '../users-repository'

export class InMemoryUsersRepository implements IUsersRepository {
  private items: User[] = []

  async create(data: Prisma.UserCreateInput) {
    const user = {
      id: 'user_id',
      name: data.name,
      email: data.email,
      password_hash: data.password_hash,
      created_at: new Date(),
    }

    this.items.push(user)

    return user
  }

  async findByEmail(email: string) {
    const user = this.items.find((item) => item.email === email)

    if (!user) {
      return null
    }

    return user
  }
}
