import { prisma } from '@/lib/prisma'
import { hash } from 'bcryptjs'

import { PrismaUsersRepository } from '@/repositories/prisma-users-repository'

interface RegisterService {
  name: string
  email: string
  password: string
}

export async function registerUseCase({
  name,
  email,
  password,
}: RegisterService) {
  const password_hash = await hash(password, 6)

  const userWithiSameEmail = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  if (userWithiSameEmail) {
    throw new Error('E-mail already registered')
  }

  const prismaUsersRepository = new PrismaUsersRepository()

  await prismaUsersRepository.create({
    name,
    email,
    password_hash,
  })
}
