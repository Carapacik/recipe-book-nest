import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('steps')
export class Step {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  number: number;
  @Column()
  title: string;
  @Column()
  description: string;
}
