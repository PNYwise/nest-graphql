import { Injectable, NotFoundException } from "@nestjs/common"

@Injectable()
export class UserRepository {
     public user = [
          {
               id: 1,
               username: 'udin',
               password: 'secure'
          },
          {
               id: 2,
               username: 'udin-2',
               password: 'secure'
          }
     ]

     findALl() {
          return this.user
     }

     findOneByUsername(username: string) {
          return this.user.find((user) => user.username === username)
     }
}