import { Component, OnInit } from '@angular/core';
import * as moment from "moment";
@Component({
  selector: 'app-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.scss'],
})
export class FooterComponent implements OnInit {
  datetime: string = '';
  constructor() {}

  ngOnInit() {
    setInterval(() => {
      let date  = new Date()
      this.datetime = moment(date).format(
        "YYYY/MM/DD HH:mm:ss"
      );
    }, 1);
  }
}
