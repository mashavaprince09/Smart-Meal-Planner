import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {InstructionsService} from '../../services/instructions-service';
import {InstructionsRequest} from '../../models/requests/instructions-request';
import {InstructionsResponse} from '../../models/responses/instructions-response';

@Component({
  selector: 'app-instructions',
  standalone: false,
  templateUrl: './instructions.html',
  styleUrl: './instructions.css',
})
export class Instructions implements OnInit {

  recipeId!: number;
  instructions: InstructionsResponse[] = [];

  constructor(private route: ActivatedRoute, private instructionsService: InstructionsService, private cdr: ChangeDetectorRef) {

  }

  ngOnInit(): void {
    this.recipeId = Number(this.route.snapshot.paramMap.get('id'));
    const instructionsRequest: InstructionsRequest= {'id':this.recipeId, 'stepBreakdown': true};

    console.log('viewInstructions', this.recipeId);

    this.instructionsService.getInstructions(instructionsRequest).subscribe({
      next:(response) => {
        this.instructions = response;
        this.cdr.detectChanges();
        console.log(this.instructions);
      },
      error: (error) => console.log("Instructions not found",error),
    });

  }

}
