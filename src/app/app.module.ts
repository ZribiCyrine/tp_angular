import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { FormsModule } from "@angular/forms";
import { SommeComponent } from './components/somme/somme.component';
import { ComposantCouleurComponent } from './components/composant-couleur/composant-couleur.component';

import { FilsComponent } from './components/fils/fils.component';
import { ParentComponent } from './components/parent/parent.component';
import { ListeCvComponent } from './components/cv_platforme/liste-cv/liste-cv.component';
import { ItemCvComponent } from './components/cv_platforme/item-cv/item-cv.component';
import { DetailCvComponent } from './components/cv_platforme/detail-cv/detail-cv.component';
import {CvComponent} from "./components/cv_platforme/cv/cv.component";
import { MyDirDirective } from './directive/my-dir.directive';
import {DefaultImagePipe} from "./components/default-image/default-image.pipe";
import { MiniWordComponent } from './components/mini-word/mini-word.component';
import { ColorComponent } from "./components/color/color.component";
import { CarteVisiteComponent } from "./components/carte-visite/carte-visite.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArcCielComponent } from "./components/arc-ciel/arc-ciel.component";
import { ArcCielDirective } from "./components/arc-ciel/arc-ciel.directive";
import { DefaultImageComponent } from "./components/default-image/default-image.component";
import { EmbaucheComponent } from "./components/cv_platforme/embauche/embauche.component";
import { ToastrModule } from "ngx-toastr";
import { ErrorComponentComponent } from './components/error-component/error-component.component';
import { ROUTING } from "./components/app.routing";
import { NavbarComponent } from './components/navbar/navbar.component';
import { DetailComponent } from './components/cv_platforme/detail/detail.component';
import { FormComponent } from './components/form/form.component';
import { ImageObservableComponent } from './components/image-observable/image-observable.component';


@NgModule({
  declarations: [AppComponent, SommeComponent, ComposantCouleurComponent, FilsComponent, ParentComponent, CvComponent, ListeCvComponent, ItemCvComponent, DetailCvComponent, CvComponent, MyDirDirective, DefaultImagePipe, MiniWordComponent,ColorComponent,CarteVisiteComponent,ArcCielDirective, ArcCielComponent,DefaultImagePipe,DefaultImageComponent, EmbaucheComponent, ErrorComponentComponent, NavbarComponent, DetailComponent, FormComponent, ImageObservableComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule,BrowserAnimationsModule,ROUTING,ToastrModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
