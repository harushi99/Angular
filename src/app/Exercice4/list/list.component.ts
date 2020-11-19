import { CvService } from './../services/cv.service';
import { Personne } from './../models/personne';
import { Component, OnInit, Output, EventEmitter  } from '@angular/core';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public personnes: Personne[] = [];
  @Output() forwardSelectedPersonne = new EventEmitter();
  
  constructor(private cvService:CvService) {
  }
  ngOnInit(): void {
    this.personnes=this.cvService.getPersonnes();
  }
  forwardPersonne(selectedPersonne: Personne) {
    this.forwardSelectedPersonne.emit(
      selectedPersonne
    );
  }
}
