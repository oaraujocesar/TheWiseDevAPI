import { User } from '../user'
import { InMemoryUserRepository } from './in-memory-user-repository'

describe('In memory User Repository', () => {
  it('should return null if user is not found', async () => {
    const users: User[] = []
    const userRepo = new InMemoryUserRepository(users)
    const user = await userRepo.findUserByEmail('any@email.com')

    expect(user).toBeNull()
  })

  it('should return user if it is found in the repository', async () => {
    const users: User[] = []
    const name = 'fake_name'
    const email = 'fake@email.com'
    const userRepo = new InMemoryUserRepository(users)

    await userRepo.add({ name, email, })

    const user = await userRepo.findUserByEmail('fake@email.com')

    expect(user).toStrictEqual({ name, email, })
  })

  it('should return all users in the repository', async () => {
    const users: User[] = [
      { name: 'César', email: 'cesar@email.com', },
      { name: 'Fran', email: 'fran@email.com', }
    ]

    const userRepo = new InMemoryUserRepository(users)

    const registeredUsers = await userRepo.findAllUsers()

    expect(registeredUsers.length).toBe(2)
  })
})
