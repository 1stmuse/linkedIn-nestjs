import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { FeedPostEntity } from '../models/post.entity';
import { FeedPost } from '../models/post.interface';

@Injectable()
export class FeedService {
    constructor(
        @InjectRepository(FeedPostEntity)
        private readonly feedPostRepository: Repository<FeedPostEntity>
    ){}

    createPost(feedPost: FeedPost): Observable<FeedPost>{

        return from(this.feedPostRepository.save(feedPost))
    }

    async findPost(take:number= 10, skip:number = 0):Promise<FeedPost[]>{
        const [posts] = await this.feedPostRepository.findAndCount({ take, skip });
        return posts;
    }

    getAllPost(): Promise<FeedPost[]>{
        return this.feedPostRepository.find()
    }

    updatePost(id: number, feedPost: FeedPost): Promise<UpdateResult>{

        return this.feedPostRepository.update(id, feedPost)
    }

    deletePost(id: number): Promise<DeleteResult>{

        return this.feedPostRepository.delete(id)
    }
}
