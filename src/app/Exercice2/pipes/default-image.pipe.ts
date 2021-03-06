import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(path: string): string {
    if(path === null || path.match(/^ *$/) !== null)     
    return "noImage.png";
    else return path;
  }

}
