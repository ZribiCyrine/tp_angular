import { Component } from '@angular/core';

@Component({
  selector: 'app-composant-couleur',
  templateUrl: './composant-couleur.component.html',
  styleUrls: ['./composant-couleur.component.css']
})
export class ComposantCouleurComponent {
  couleur='white';
  constructor() {
  }
  changeColor(input_color:any){
    this.couleur=input_color.value;
  }
  set_to_default_color(){
    this.couleur='white'
  }

}
