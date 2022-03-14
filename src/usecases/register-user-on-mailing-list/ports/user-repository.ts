import { User } from '../user'

export interface UserRepository {
  add(user: User): Promise<void>
  findUserByEmail(email: string): Promise<User>
  findAllUsers(): Promise<User[]>
  isUserRegistered(user: User): Promise<boolean>
}
