import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('recipe')
export class RecipeController {
  @Post()
  async createRecipe(@Body() recipeDto: string): Promise<boolean> {
    return true;
  }

  @Get()
  async recipeOfDay(): Promise<string> {
    return 'recipe of day';
  }
}
