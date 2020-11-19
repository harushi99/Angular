import { Component, OnInit } from '@angular/core';
import { Flower } from '../models/flower';

@Component({
  selector: 'app-test-pipe',
  templateUrl: './test-pipe.component.html',
  styleUrls: ['./test-pipe.component.css']
})
export class TestPipeComponent implements OnInit {

  constructor() { }
  flowers : Flower[];
  ngOnInit(): void {
    this.flowers=[
       new Flower(0,"Flower Bouquet", "flower1.jpg","One person","Many words",5630),
       new Flower(1,"Only Flower", "flower2.jpg","Two person","Many Many words",67452),
       new Flower(2,"No Flower", " ","No person","No words",0),
    ]
  }

}
