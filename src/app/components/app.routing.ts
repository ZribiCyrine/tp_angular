import { RouterModule, Routes } from "@angular/router";
import { CvComponent } from "./cv_platforme/cv/cv.component";
import { ErrorComponentComponent } from "./error-component/error-component.component";
import { ColorComponent } from "./color/color.component";
import { ArcCielComponent } from "./arc-ciel/arc-ciel.component";
import { CarteVisiteComponent } from "./carte-visite/carte-visite.component";
import { DefaultImageComponent } from "./default-image/default-image.component";
import { MiniWordComponent } from "./mini-word/mini-word.component";
import { DetailCvComponent } from "./cv_platforme/detail-cv/detail-cv.component";
import { DetailComponent } from "./cv_platforme/detail/detail.component";
import { FormComponent } from "./form/form.component";










const APP_ROUTING: Routes = [
    {path: 'cv', children: [
        {path: '', component: CvComponent},
        {path: ':id', component: DetailComponent},
      ]},

    {path: '', component: CvComponent},


    //tp3
    {path: 'color', component: ColorComponent},
    {path: 'formulaire', component: FormComponent},
    {path: 'arc_ciel', component: ArcCielComponent},
    {path: 'carte_visite', component: CarteVisiteComponent},
    {path: 'default_image', component: DefaultImageComponent},
    {path: 'mini_word', component: MiniWordComponent},

    {path: '**', component: ErrorComponentComponent}
  ];
  
  export const ROUTING = RouterModule.forRoot(APP_ROUTING);