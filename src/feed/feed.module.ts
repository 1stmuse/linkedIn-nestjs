import { Module } from '@nestjs/common';
import { FeedService } from './services/feed.service';
import { FeedController } from './contollers/feed.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedPostEntity } from './models/post.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([FeedPostEntity])
  ],
  controllers: [FeedController],
  providers: [FeedService]
})
export class FeedModule {}
