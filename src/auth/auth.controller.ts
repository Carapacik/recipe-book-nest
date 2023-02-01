import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(): Promise<string> {
    return 'jwt token';
  }

  @Post('login')
  async login(): Promise<string> {
    return 'jwt token';
  }
}