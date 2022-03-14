import { UserRepository } from '../ports/user-repository'
import { User } from '../user'

export class InMemoryUserRepository implements UserRepository {
  private repository: User[]

  constructor (repository: User[]) {
    this.repository = repository
  }

  add (user: User): Promise<void> {
    throw new Error('Method not implemented.')
  }

  findUserByEmail (email: string): Promise<User> {
    return null as unknown as Promise<User>
  }

  findAllUsers (): Promise<User[]> {
    throw new Error('Method not implemented.')
  }

  isUserRegistered (user: User): Promise<boolean> {
    throw new Error('Method not implemented.')
  }
}
