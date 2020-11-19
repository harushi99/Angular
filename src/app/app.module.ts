import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RainbowDirective } from './Exercice1/directives/rainbow.directive';
import { RandomcolorModule } from 'angular-randomcolor';
import { DefaultImagePipe } from './Exercice2/pipes/default-image.pipe';
import { TestPipeComponent } from './Exercice2/test-pipe/test-pipe.component';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './Exercice3/todo/todo.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { RainbowComponent } from './Exercice1/rainbow/rainbow.component';
import { EmbaucheComponent } from './Exercice4/embauche/embauche.component';
import { CvComponent } from './Exercice4/cv/cv.component';
import { ListComponent } from './Exercice4/list/list.component';
import { DetailComponent } from './Exercice4/detail/detail.component';
import { ItemComponent } from './Exercice4/item/item.component';
@NgModule({
  declarations: [
    AppComponent,
    RainbowDirective,
    DefaultImagePipe,
    TestPipeComponent,
    HomeComponent,
    TodoComponent,
    FooterComponent,
    RainbowComponent,
    EmbaucheComponent,
    CvComponent,
    ListComponent,
    DetailComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RandomcolorModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
