import { Injectable } from '@angular/core';
import { Personne } from '../Model/Personne';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class EmbaucheservService {
  private personnesEm: Personne[];

  constructor(private toastr: ToastrService) {
    this.personnesEm = [];
  }

  getEmbauchees(): Personne[] {
    return this.personnesEm;
  }

  embaucher(personne: Personne): void {

    if (this.personnesEm.indexOf(personne) < 0) {
      this.personnesEm.push(personne);
      this.toastr.success(`${personne.name} est embauché(e)`, 'embauche');
    } else {
      this.toastr.error(`${personne.name} est déja embauché(e)`, "Error d'embauche!");
    }
  }

  debaucher(personne: Personne): void {
    const index = this.personnesEm.indexOf(personne);
    if (index >= 0) {
      this.personnesEm.splice(index, 1);
      this.toastr.error(`${personne.name} supprimé(e) de la liste des personnes embauchées`, 'cv supprimé');
    }
  }
}
