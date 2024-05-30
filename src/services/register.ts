import { prisma } from '@/lib/prisma'
import { hash } from 'bcryptjs'

interface RegisterProps {
  name: string
  email: string
  password: string
}

export class RegisterService {
  constructor(private usersRepository: any) {}

  async execute({ name, email, password }: RegisterProps) {
    const password_hash = await hash(password, 6)

    const userWithiSameEmail = await prisma.user.findUnique({
      where: {
        email,
      },
    })

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
