import { Component, OnInit } from '@angular/core';
import { Recette } from './recette.model';
import { RecetteService } from './recette.service';

@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.page.html',
  styleUrls: ['./recettes.page.scss'],
})
export class RecettesPage implements OnInit {

  listeR: Recette[];
  constructor(private recettesService: RecetteService) {
    this.listeR = recettesService.getAllRecipes()
  }
  ngOnInit() {
    this.listeR = this.recettesService.getAllRecipes();
  }

}
