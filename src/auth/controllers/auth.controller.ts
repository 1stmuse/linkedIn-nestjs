import { Body, Controller, Post } from '@nestjs/common';
import { User } from '../models/user.interface';
import { AuthService } from '../servies/auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @Post('register')
    registerUser(
        @Body() body: User
    ): Promise<User> {
        return this.authService.registerAccount(body)
    }
}
