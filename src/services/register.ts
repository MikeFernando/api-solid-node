import { hash } from 'bcryptjs'

import { IUsersRepository } from '@/repositories/users-repository'
import { UserAlreadyExistsError } from './error/user-already-exists-error'

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
      throw new UserAlreadyExistsError()
    }

    await this.usersRepository.create({
      name,
      email,
      password_hash,
    })
  }
}
