import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {
  constructor (private domSanitizer: DomSanitizer){}
  transform(image: any): unknown {
    if(!image){
      return 'assets/img.png';
    }
    return this.domSanitizer.bypassSecurityTrustResourceUrl(image);

  }

}
