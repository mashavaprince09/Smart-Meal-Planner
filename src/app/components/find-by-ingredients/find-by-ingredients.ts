import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FindByIngredientsService} from '../../services/find-by-ingredients-service';
import {FindByIngredientsRequest} from '../../models/requests/find-by-ingredients-request';
import {FindByIngredientsResponse} from '../../models/responses/find-by-ingredients-response';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-find-by-ingredients',
  standalone: false,
  templateUrl: './find-by-ingredients.html',
  styleUrl: './find-by-ingredients.css',
})
export class FindByIngredients implements OnInit {

  findByIngredientsRequest: FindByIngredientsRequest = {ingredients: [], number: 10, ranking: 1, ignorePantry: false};

  findByIngredientsResponse: FindByIngredientsResponse[] = [];

  constructor(private route: ActivatedRoute, private findByIngredientsService: FindByIngredientsService, private cdr: ChangeDetectorRef) {

  }

  ngOnInit() {

  }


  onSubmit() {
    console.log(this.findByIngredientsRequest);
    this.findByIngredientsService.findByIngredientsTest(this.findByIngredientsRequest).subscribe({
      next:(response) => {
        this.findByIngredientsResponse = response;
        this.cdr.detectChanges();
        console.log(this.findByIngredientsResponse);
      },
      error: (error) => console.log("Instructions not found",error),
    });
  }
}
