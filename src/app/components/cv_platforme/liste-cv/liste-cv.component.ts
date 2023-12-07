import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personne } from "../Model/Personne";
import { Subscription } from 'rxjs';
import { CvService } from '../service/cv.service';

@Component({
  selector: 'app-liste-cv',
  templateUrl: './liste-cv.component.html',
  styleUrls: ['./liste-cv.component.css']
})
export class ListeCvComponent implements OnInit {
  @Input() personnes: Personne[];
  //@Output() selectedPersonne = new EventEmitter();
  personne!: Personne;
  private subscription!: Subscription;

  constructor(
    private cvService: CvService
  ) {
    this.personnes = []
  }

  ngOnInit(): void {
    this.subscription= this.cvService.selectedPersonne$.subscribe(
      personne=>{
        this.personne=personne;
      }
    )
  }

  /*selectPersonne(selectedPersonne: any) {
    this.selectedPersonne.emit(
      selectedPersonne
    )
  }*/
}
