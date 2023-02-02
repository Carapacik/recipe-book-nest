import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DbModule } from './db/db.module';
import { User } from './db/entities/user.entity';
import { Recipe } from './db/entities/recipe.entity';
import { Ingredient } from './db/entities/ingredient.entity';
import { IngredientItem } from './db/entities/ingredien-item.entity';
import { Step } from './db/entities/step.entity';
import { Tag } from './db/entities/tag.entity';
import { AuthModule } from './auth/auth.module';
import { RecipeModule } from './recipe/recipe.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: '12345',
      database: 'recipe_db',
      entities: [User, Recipe, Ingredient, IngredientItem, Step, Tag],
      synchronize: true,
    }),
    DbModule,
    AuthModule,
    RecipeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
