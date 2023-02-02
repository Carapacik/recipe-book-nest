import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true })
  name: string;
  @Column({ default: '' })
  description: string;
  @Column({ unique: true })
  email: string;
  @Column()
  passwordHash: string;
  @Column()
  passwordSalt: string;
  @Column({ default: new Date() })
  creationDate: Date;
}
