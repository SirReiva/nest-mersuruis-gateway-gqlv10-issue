import { Args, ID, Query, Resolver } from '@nestjs/graphql';
import { Post } from './models/post.model';
import { PostsService } from './posts.service';

@Resolver((of) => Post)
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Query((_) => Post)
  post(@Args({ name: 'id', type: () => ID }) id: number): Post {
    return this.postsService.findOne(id);
  }

  @Query((_) => [Post])
  posts(): Post[] {
    return this.postsService.findAll();
  }
}
