import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-tableChart",
  templateUrl: "./tableChart.component.html",
  styleUrls: ["./tableChart.component.scss"],
})
export class TableChartComponent implements OnInit {
  @Input() title = "";
  constructor() {}

  ngOnInit() {}
}
