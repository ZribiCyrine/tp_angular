import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appMyDir]'
})
export class MyDirDirective {
  color_tab=[
    'black',
    'white',
    'red',
    'yellow',
    'green',
    'Crimson',
    'Cyan',
    'orange'
  ]

  @HostBinding('style.borderColor')bc ='red';
  @HostBinding('style.color')color ='white';
    constructor() { }
    @HostListener('keyup') changebc() :void{
      const i =Math.floor(Math.random()*(this.color_tab.length -1))
      this.bc=this.color_tab[i];
      const j =Math.floor(Math.random()*(this.color_tab.length -1))
      this.color=this.color_tab[j];

    }


}
