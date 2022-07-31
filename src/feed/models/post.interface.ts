import { UserEntity } from "src/auth/models/user.entity"
import { User } from "src/auth/models/user.interface"

export interface FeedPost {
    id?: number,
    body?: string,
    createdAt?: Date,
    author?: User 
    // updatedAt?: Date
}