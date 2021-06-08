import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data: any;

  constructor() {
    this.data = {
      datasets: [{
        data: [
          95,
          90,
          95,
          75,
          65
        ],
        backgroundColor: [
          "#FF6384",
          "#4BC0C0",
          "#FFCE56",
          "#E7E9ED",
          "#36A2EB"
        ],
        label: 'My dataset'
      }],
      labels: [
        "Permission",
        "Roles",
        "Brands",
        "Categories",
        "Products"
      ]
    }
  }

  ngOnInit(): void {
  }

}
