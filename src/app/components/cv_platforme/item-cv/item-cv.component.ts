import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personne } from "../Model/Personne";
import { CvService } from '../service/cv.service';

@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.css']
})
export class ItemCvComponent implements OnInit {

  @Input() personne!: Personne;
  //@Output() selectedPersonne=new EventEmitter<Personne>();
  constructor(
    private cvService: CvService
  ) {}

  ngOnInit(): void {
  }

  selectPersonne() {
    this.cvService.selectPersonne(this.personne);
  }
  /*selectPersonne(){
    this.selectedPersonne.emit(
      this.personne
    );
  }*/
}
