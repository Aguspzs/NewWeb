import { HttpClient } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage',
})
export class ImagePipe implements PipeTransform {
  constructor(private http: HttpClient){}
  transform(image: any): any {
    if (image) {
      image = image.trim();
    }
    if (image === undefined || image === '' || image === null) {
      return 'assets/img/no-image.png';
    } else {
      if(`assets/img/machines/${image}`){
        return `assets/img/machines/${image}`;
      } else {
        return 'assets/img/no-image.png';
      }
    }
  }
}
