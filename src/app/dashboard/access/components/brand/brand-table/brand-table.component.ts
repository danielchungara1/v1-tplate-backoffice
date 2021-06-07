import {Component, Input, OnInit} from '@angular/core';
import {CrudService} from '@core/crud/crud.service';
import {ResultSearch} from '@core/abstractClases/ResultSearch';
import {BrandModel} from '../../../models/BrandModel';

@Component({
  selector: 'app-brand-table',
  templateUrl: './brand-table.component.html',
  styleUrls: ['./brand-table.component.scss']
})
export class BrandTableComponent implements OnInit {

  @Input()
  crudService: CrudService<BrandModel>;

  brands: BrandModel[];

  constructor() { }

  ngOnInit(): void {
    this.crudService.$resultSearch.subscribe((resultSearch: ResultSearch<BrandModel>) => {
      this.brands = resultSearch.page.content;
    });
  }
}
