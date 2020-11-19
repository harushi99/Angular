import { Personne } from './../models/personne';

import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() personne: Personne;
  @Output() sendPersonne = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {}
  selectItem() {
    this.sendPersonne.emit(this.personne);
  }

}
