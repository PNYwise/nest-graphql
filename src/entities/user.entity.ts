import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Pet } from './pet.entity';

@ObjectType()
export class User {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  id: number

  @Field(() => String, { description: 'Example field (placeholder)' })
  username: string;

  password?: string

  @Field(() => Pet, { nullable: true })
  pet?: Pet
}
