import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent {
   @Input() parentback_color='green'
   myFavoriteColor="green"
   @Output() sendR=new EventEmitter();
  constructor() {
  }
  sendevent() {
    this.sendR.emit
    (this.myFavoriteColor)
  }
}
