import { Directive, HostBinding, HostListener } from '@angular/core';
import { RandomColor } from 'angular-randomcolor';
@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {

  constructor() { }
  @HostBinding('style.borderColor') borderColor;
  @HostBinding('style.color') color ;

  @HostListener('keyup') onKeyUpEvent(){
   this.color=RandomColor.generateColor();
   this.borderColor=RandomColor.generateColor();
  }

}
