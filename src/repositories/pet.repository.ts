import { Injectable } from "@nestjs/common"

@Injectable()
export class PetRepository {
     private pet = [
          {
               id: 1,
               name: 'cat',
          },
          {
               id: 2,
               name: 'dog'
          }
     ]

     findALl() {
          return this.pet
     }

     findOne(id: number) {
          return this.pet.find((pet) => pet.id === id)
     }
}