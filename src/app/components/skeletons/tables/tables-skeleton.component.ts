import { Component, OnInit, HostListener } from '@angular/core';
@Component({
  selector: 'app-tables-skeleton',
  templateUrl: 'tables-skeleton.component.html',
  styleUrls: ['tables-skeleton.component.scss'],
})
export class TablesSkeletonComponent implements OnInit {
  //Window size
  getScreenWidth: number;
  getScreenHeight: number;
  smallDevice: boolean = false;

  constructor() {}

  ngOnInit() {
    //Window size
    this.getScreenWidth = window.innerWidth;
    this.getScreenWidth > 768
      ? (this.smallDevice = false)
      : (this.smallDevice = true);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.getScreenWidth = event.target.innerWidth;
    this.getScreenWidth > 768
      ? (this.smallDevice = false)
      : (this.smallDevice = true);
  }
}
