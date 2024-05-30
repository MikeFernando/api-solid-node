import { hash } from 'bcryptjs'

import { IUsersRepository } from '@/repositories/users-repository'

interface RegisterProps {
  name: string
  email: string
  password: string
}

export class RegisterService {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({ name, email, password }: RegisterProps) {
    const password_hash = await hash(password, 6)

    const userWithiSameEmail = await this.usersRepository.findByEmail(email)

    if (userWithiSameEmail) {
      throw new Error('E-mail already registered')
    }

    await this.usersRepository.create({
      name,
      email,
      password_hash,
    })
  }
}
