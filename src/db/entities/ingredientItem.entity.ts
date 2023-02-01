import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('ingredient_item')
export class IngredientItem {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  ingredientId: number;
}
