import { Component } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent {
  color: string = ''; 
  defaultcolor='red'
  resetColor() {
    this.color = this.defaultcolor; 
  }
}
