import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-image-observable',
  templateUrl: './image-observable.component.html',
  styleUrls: ['./image-observable.component.css']
})
export class ImageObservableComponent implements OnInit {

  imgObservable!: Observable<string>;
  images=[
    'cyrine.jpg',
    'may.jpg',
    'salim.jpg',
    'omar.jpg',
    'seddik.jpg'
  ];
  currentImage!: string;
  ngOnInit(): void {
    this.imgObservable= new Observable(
      (observer)=> {
        let i= this.images.length-1
        setInterval(
          ()=> {
            observer.next(this.images[i]);
            if(i>0){
              i--;
            }else{
              i= this.images.length-1
            }
          }
          ,1000);
      }
    );
    this.imgObservable.subscribe(
      (result)=>{
        this.currentImage= result;
      }
    );
  }
}
