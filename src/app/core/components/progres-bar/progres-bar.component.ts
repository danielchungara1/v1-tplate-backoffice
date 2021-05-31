import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-progres-bar',
  templateUrl: './progres-bar.component.html',
  styleUrls: ['./progres-bar.component.scss']
})
export class ProgresBarComponent implements OnInit {

  constructor() {
  }

  @Input()
  show = false;

  ngOnInit(): void {
  }

}
