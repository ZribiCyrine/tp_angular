import { Injectable } from '@angular/core';
import { Personne } from '../Model/Personne';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  private personnes: Personne[];

  private selectedPersonne = new Subject<Personne>();
  selectedPersonne$ = this.selectedPersonne.asObservable();

  constructor() {
    this.personnes = [
      new Personne(1, 'Ben Omrane', 'Med Salim', 22, 'salim.jpg', 88888888, 'WEB DEV'),
      new Personne(2, 'Zribi', 'cyrine', 22, 'cyrine.jpg', 11111111, 'WEB DEV'),
      new Personne(3, 'Hammami ', 'Omar', 23, 'omar.jpg', 22222222, 'WEB DEV'),
      new Personne(4, 'Ben Jeddou', 'May', 22, 'may.jpg', 33333333, 'WEB DEV'),
      new Personne(5, 'Turki', 'Med Seddik', 22, 'seddik.jpg', 44444444, 'WEB DEV'),

    ];
  }

  selectPersonne(personne: Personne) {
    this.selectedPersonne.next(personne);
  }

  getPersonnesCv(): Personne[] {
    return this.personnes;
  }

  getPersonneById(id: number): Personne {
    return this.personnes.find(p => p.id == id) || new Personne(); // Utilisez "||" pour renvoyer une nouvelle Personne si aucune personne n'est trouvée.
  }

  deletePersonne(personne: Personne): void {
    const index = this.personnes.indexOf(personne);
    if (index >= 0) {
      this.personnes.splice(index, 1);
    }
  }
}
