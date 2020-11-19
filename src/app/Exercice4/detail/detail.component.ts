import { EmbaucheService } from './../services/embauche.service';
import { Personne } from './../models/personne';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() personne: Personne = null;

  constructor(private embaucheService:EmbaucheService) { }

  ngOnInit(): void {
  }
  hire($event,personne){
    this.embaucheService.addPersonne(personne);
  }
}
