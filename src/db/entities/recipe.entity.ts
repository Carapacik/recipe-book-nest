import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('recipes')
export class Recipe {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  description: string;
  @Column()
  imageUrl: string;
  @Column()
  cookingTimeInMinutes: number;
  @Column()
  portionsCount: number;
  @Column({ default: new Date() })
  creationDate: Date;
  @Column()
  userId: number;
}
