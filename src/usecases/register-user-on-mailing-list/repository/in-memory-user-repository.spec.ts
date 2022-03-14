import { User } from '../user'
import { InMemoryUserRepository } from './in-memory-user-repository'

describe('In memory User Repository', () => {
  it('should return null if user is not found', async () => {
    const users: User[] = []
    const userRepo = new InMemoryUserRepository(users)
    const user = await userRepo.findUserByEmail('any@email.com')

    expect(user).toBeNull()
  })
})
