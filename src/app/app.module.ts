import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RainbowDirective } from './directives/rainbow.directive';
import { RandomcolorModule } from 'angular-randomcolor';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import { TestPipeComponent } from './test-pipe/test-pipe.component';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { RainbowComponent } from './rainbow/rainbow.component';
@NgModule({
  declarations: [
    AppComponent,
    RainbowDirective,
    DefaultImagePipe,
    TestPipeComponent,
    HomeComponent,
    TodoComponent,
    FooterComponent,
    RainbowComponent
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
