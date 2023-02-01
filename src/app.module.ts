import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DbModule } from './db/db.module';
import { DataSource } from 'typeorm';
import { User } from './db/entities/user.entity';
import { Recipe } from './db/entities/recipe.entity';
import { Ingredient } from './db/entities/ingredient.entity';
import { IngredientItem } from './db/entities/ingredientItem.entity';
import { Step } from './db/entities/step.entity';
import { Tag } from './db/entities/tag.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345',
      database: 'recipe_db',
      entities: [User, Recipe, Ingredient, IngredientItem, Step, Tag],
      synchronize: true,
    }),
    DbModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
