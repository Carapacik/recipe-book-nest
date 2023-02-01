import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  description: string;
  @Column()
  email: string;
  @Column()
  passwordHash: string;
  @Column()
  passwordSalt: string;
  @Column()
  creationDate: Date;
}
