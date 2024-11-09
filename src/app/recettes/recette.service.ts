import { Injectable } from '@angular/core';
import { Recette } from './recette.model';

@Injectable({
  providedIn: 'root'
})
export class RecetteService {

  listeRecettes: Recette[] = [
    {
      id: 'r1',
      Title: 'escalope panné',
      imageUrl: 'https://mccormick.widen.net/content/pl2zil1etj/original/escalope_de_dinde_panee_800x800.jpg',
      ingredients: ['frite', 'scallope', 'salade']
    }, {
      id: 'r2',
      Title: 'Spaguetti',
      imageUrl: 'https://img.taste.com.au/sE-X5HqY/taste/2024/03/5-ingredient-turbo-charged-spaghetti-recipe-196959-1.jpg',
      ingredients: ['spagetti', 'viande', 'tomate']
    }
  ];
  constructor() { }
  getAllRecipes() {
    return [...this.listeRecettes];
  }
  getRecipe(recipeId: string | null) {
    return {
      ...this.listeRecettes.find(recette => { return recette.id == recipeId }
      )
    };
  }
}
