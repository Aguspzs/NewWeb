import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-pieChart",
  templateUrl: "./pieChart.component.html",
  styleUrls: ["./pieChart.component.scss"],
})
export class PieChartComponent implements OnInit {
  @Input() title = "";
  constructor() {}

  ngOnInit() {}
}
