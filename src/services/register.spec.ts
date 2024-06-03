import { beforeEach, describe, expect, it } from 'vitest'
import { compare } from 'bcryptjs'

import { RegisterService } from './register'
import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { UserAlreadyExistsError } from './errors/user-already-exists-error'

let usersRepository: InMemoryUsersRepository
let sut: RegisterService

describe('Register Services', () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository()
    sut = new RegisterService(usersRepository)
  })

  it('should be able to register', async () => {
    const { user } = await sut.execute({
      name: 'Jonh Doe',
      email: 'johndoe@gmail.com',
      password: '123456',
    })

    expect(user).toHaveProperty('id')
  })

  it('should hash user password upon registration', async () => {
    const { user } = await sut.execute({
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      password: '123456',
    })

    const isPasswordCorrectlyHashed = await compare(
      '123456',
      user.password_hash,
    )

    expect(isPasswordCorrectlyHashed).toEqual(true)
  })

  it('should not be able to register with same email twice', async () => {
    const email = 'johndoe@gmail.com'

    await sut.execute({
      name: 'John Doe',
      email,
      password: '123456',
    })

    expect(() =>
      sut.execute({
        name: 'Teste',
        email,
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(UserAlreadyExistsError)
  })
})
