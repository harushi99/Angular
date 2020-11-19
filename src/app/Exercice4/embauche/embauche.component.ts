import { EmbaucheService } from './../services/embauche.service';
import { Personne } from './../models/personne';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css'],
})
export class EmbaucheComponent implements OnInit {
  
 personnesEmbauche:Personne[]=[];
  constructor(private embaucheService: EmbaucheService) { }

  ngOnInit(): void {
    this.personnesEmbauche=this.embaucheService.getPersonneEmbauche();
  }

}
