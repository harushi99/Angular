import { EmbaucheService } from './../services/embauche.service';
import { Personne } from './../models/personne';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
 // providers:[EmbaucheService]
})
export class CvComponent implements OnInit {
  selectedPersonne: Personne;
  constructor() { }

  ngOnInit(): void {
  }
  catchSelectedPersonne(forwardedPersonne: Personne) {
    this.selectedPersonne = forwardedPersonne;
  }
}
