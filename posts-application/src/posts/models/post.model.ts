import { Directive, Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { UserPost } from './user.model';

@ObjectType()
export class Post {
  @Field((type) => ID)
  id: number;

  @Field()
  title: string;

  @Field((type) => Int)
  authorId: number;

  @Field((type) => UserPost)
  user?: UserPost;
}
