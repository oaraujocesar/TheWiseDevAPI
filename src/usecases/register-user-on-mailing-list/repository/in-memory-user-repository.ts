import { UserRepository } from '../ports/user-repository'
import { User } from '../user'

export class InMemoryUserRepository implements UserRepository {
  private repository: User[]

  constructor (repository: User[]) {
    this.repository = repository
  }

  async add (user: User): Promise<void> {
    const isUserRegistered = await this.isUserRegistered(user)

    if (!isUserRegistered) {
      this.repository.push(user)
    }
  }

  async findUserByEmail (email: string): Promise<User | null> {
    const user = this.repository.find((user: User) => user.email === email) ?? null

    return user
  }

  async findAllUsers (): Promise<User[]> {
    return this.repository
  }

  async isUserRegistered (user: User): Promise<boolean> {
    if (!(await this.findUserByEmail(user.email))) {
      return false
    }

    return true
  }
}
