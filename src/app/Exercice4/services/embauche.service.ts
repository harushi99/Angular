import { Personne } from './../models/personne';
import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {

  constructor() { }
personnesEmbauche:Personne[]=[];
 
 getPersonneEmbauche(){
  return this.personnesEmbauche;
 }
 
  addPersonne(personne:Personne) {
   let index= this.personnesEmbauche.findIndex(person => person.id === personne.id);
    if (index === -1 ){    this.personnesEmbauche.push(personne);
    }
    else{
      Swal.fire(personne.name+" is already hired :p");
    }

  }

}
