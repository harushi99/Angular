import { RainbowComponent } from './rainbow/rainbow.component';
import { AppComponent } from './app.component';
import { TestPipeComponent } from './test-pipe/test-pipe.component';
import { HomeComponent } from './home/home.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';



const routes: Routes = [ 
{ path: '', component:HomeComponent},
{ path: 'todo', component:TodoComponent},
{ path: 'testPipe', component: TestPipeComponent},
{ path: 'exercieRainbow', component: RainbowComponent},
{ path: '**', component:HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
