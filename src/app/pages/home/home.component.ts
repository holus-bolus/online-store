import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  cols = 3;

  constructor() {}

  ngOnInit() {}

  onColumnsCountChanged(colsNumber: number): void {
    this.cols = colsNumber;
  }
}
