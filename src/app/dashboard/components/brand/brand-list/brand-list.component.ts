import {Component, OnInit} from '@angular/core';
import {BrandService} from '../../../services/brand/brand.service';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.scss']
})
export class BrandListComponent implements OnInit {

  constructor(public brandService: BrandService) {
  }

  ngOnInit(): void {
    this.brandService.searchAndEmit('', 0);
  }

}
