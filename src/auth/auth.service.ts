import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../db/entities/user.entity';
import { Repository } from 'typeorm';
import { LoginParams, RegisterParams } from './types/types';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async register(registerParams: RegisterParams): Promise<void> {
    const newUser = this.userRepository.create({
      ...registerParams,
      creationDate: new Date(),
    });
    await this.userRepository.save(newUser);
    return;
  }

  async login(loginParams: LoginParams): Promise<void> {
    await this.userRepository.find();
    return;
  }
}
