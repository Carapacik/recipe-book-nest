import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('ingredient_items')
export class IngredientItem {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  ingredientId: number;
}
