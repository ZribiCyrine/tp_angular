import { Component } from '@angular/core';
import { Personne } from '../Model/Personne';

import { EmbaucheservService } from '../service/embaucheserv.service';



@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css']
})
export class EmbaucheComponent {
  personnesEm!: Personne [];
  constructor(private embaucheService: EmbaucheservService) {
   }

  ngOnInit() {
    this.personnesEm = this.embaucheService.getEmbauchees();
  }

}
