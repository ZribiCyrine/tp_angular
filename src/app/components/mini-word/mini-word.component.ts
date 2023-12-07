import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-mini-word',
  templateUrl: './mini-word.component.html',
  styleUrls: ['./mini-word.component.css']
})
export class MiniWordComponent {
  @Input() color ='white';
  @Input() bgcolor='grey';
  @Input() size='25px'
  @Input() police ='Arial';
  isChecked="Arial"

  changesize(size: string){
    this.size=size+'px';
  }
  changeFont(font:string){
    this.police=font;
  }
}
