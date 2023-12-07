import { Component, OnInit } from '@angular/core';
import { Personne } from "../Model/Personne";
import { CvService } from '../service/cv.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  personnes: Personne[];
  selectedPersonne!: Personne;
  private subscription!: Subscription;

  constructor(
    private cv_service: CvService
    ) {
    this.personnes = this.personnes = this.cv_service.getPersonnesCv();
  }

  ngOnInit(): void {
    this.subscription=this.cv_service.selectedPersonne$.subscribe(
      personne=>{
        this.selectedPersonne=personne;
      }
    )
  }

  selectPersonne(personne: Personne) {
    this.selectedPersonne = personne;
  }


}
