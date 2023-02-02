import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('ingredients')
export class Ingredient {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
}
