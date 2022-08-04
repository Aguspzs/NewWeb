import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-lineChart",
  templateUrl: "./lineChart.component.html",
  styleUrls: ["./lineChart.component.scss"],
})
export class LineChartComponent implements OnInit {
  @Input() title = "";
  constructor() {}

  ngOnInit() {}
}
