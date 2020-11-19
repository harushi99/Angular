import { RainbowComponent } from './Exercice1/rainbow/rainbow.component';
import { TestPipeComponent } from './Exercice2/test-pipe/test-pipe.component';
import { HomeComponent } from './home/home.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './Exercice3/todo/todo.component';
import { EmbaucheComponent } from './Exercice4/embauche/embauche.component';
import { CvComponent } from './Exercice4/cv/cv.component';



const routes: Routes = [ 
{ path: '', component:HomeComponent},
{ path: 'todo', component:TodoComponent},
{ path: 'testPipe', component: TestPipeComponent},
{ path: 'exercieRainbow', component: RainbowComponent},
{ path: 'exercieCv', component: CvComponent},
{ path: '**', component:HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
