import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RainbowDirective } from './directives/rainbow.directive';
import { TestComponent } from './test/test.component';
import { RandomcolorModule } from 'angular-randomcolor';

@NgModule({
  declarations: [
    AppComponent,
    RainbowDirective,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RandomcolorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
