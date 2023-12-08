import { Component, Input } from '@angular/core';
import { Personne } from "../Model/Personne";
import { EmbaucheservService } from '../service/embaucheserv.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css']
})
export class DetailCvComponent {
  @Input() personne: Personne;

  constructor(
    private embaucheService: EmbaucheservService,
    private router: Router
  ) {
    this.personne = new Personne();
  }
  
  embaucher() {
    this.embaucheService.embaucher(this.personne);
  }

  details() {
    const link = ['cv', this.personne.id];
    this.router.navigate(link);
  }
}
