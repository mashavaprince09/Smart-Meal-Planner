import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RecipeSearchService} from '../../services/recipe-search-service';

@Component({
  selector: 'app-instructions',
  standalone: false,
  templateUrl: './instructions.html',
  styleUrl: './instructions.css',
})
export class Instructions implements OnInit {

  recipeId!: number;
  instructions?: string;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeSearchService
  ) {}

  ngOnInit(): void {
    this.recipeId = Number(this.route.snapshot.paramMap.get('id'));
  }
}
