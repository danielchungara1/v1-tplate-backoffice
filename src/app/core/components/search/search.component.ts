import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup} from '@angular/forms';
import {SearchModel} from '@core/components/search/SearchModel';
import {CrudService} from '@core/crud/crud.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent<T> implements OnInit {

  @Input()
  crudService: CrudService<T>;

  form: FormGroup;

  constructor(public formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  handlerSubmit(): void {

    const model: SearchModel = this.form.value as SearchModel;

    this.crudService.searchAndEmit(model.textSearch, 0);

  }

  get getFormControls(): { [p: string]: AbstractControl } {
    return this.form.controls;
  }


  private initializeForm(): void {
    this.form = this.formBuilder.group({
      textSearch: ['', []]
    });
  }


}
