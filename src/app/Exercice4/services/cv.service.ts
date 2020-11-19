import { Personne } from './../models/personne';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  constructor() { }
  personnes:Personne[] = [
    new Personne(1, 'sellaouti', 'aymen', 'Teacher', 'as.jpg', 16324724, 38),
    new Personne(2, 'Gold', 'Robert', 'Teacher', 'rotating_card_profile2.png', 36521574, 24),
    new Personne(3, 'Mystic', 'Sarra', 'Teacher', '                 ', 36428719, 45),
  ];
  getPersonnes(){
 return this.personnes

  }
}
