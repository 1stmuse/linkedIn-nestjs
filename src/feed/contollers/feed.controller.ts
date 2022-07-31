import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { FeedPost } from '../models/post.interface';
import { FeedService } from '../services/feed.service';

@Controller('feed')
export class FeedController {
    constructor(private readonly feedService:FeedService){}

    @Get('all')
    getAllPost(): Promise<FeedPost[]>{
        return this.feedService.getAllPost()
    }

    @Get()
    findSelectedPost(
        @Query('take') take: number = 1,
        @Query('skip') skip: number = 1
    ): Promise<FeedPost[]>{
        take = take > 20 ? 20 : take
        return this.feedService.findPost(take, skip)
    }

    @Post()
    create(
        @Body() post: FeedPost
    ): Observable<FeedPost>{
      
        return this.feedService.createPost(post)
    }

    @Put(':id')
    updatePost(
        @Param("id") id: number ,
        @Body() post: FeedPost
    ): Promise<UpdateResult>{
            return this.feedService.updatePost(id, post)
    }

    @Delete(":id")
    deletePost(
        @Param("id") id: number
    ): Promise<DeleteResult>{
        return this.feedService.deletePost(id)
    }
}
