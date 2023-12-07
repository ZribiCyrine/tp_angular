import { Component } from '@angular/core';
import { Personne } from '../Model/Personne';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmbaucheservService } from '../service/embaucheserv.service';
import { CvService } from '../service/cv.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {

  personne!: Personne;
  constructor(
    private cvService: CvService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private embaucheservService: EmbaucheservService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.personne = this.cvService.getPersonneById(params['id']);
      }
    )
  }

  returnToCvList() {
    const link = ['cv'];
    this.router.navigate(link);
  }

  deletePersonne() {
    this.cvService.deletePersonne(this.personne);
    this.embaucheservService.debaucher(this.personne);
    const link = ['cv'];
    this.router.navigate(link);
    this.toastr.error(`${this.personne.name} supprimé(e) de la liste des CV`, 'cv supprimé');
    this.toastr.error(`${this.personne.name} supprimé(e) de la liste des personnes embauchées`, 'cv supprimé');
  }
}
