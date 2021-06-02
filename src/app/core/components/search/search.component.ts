import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup} from '@angular/forms';
import {SearchModel} from '@core/components/search/SearchModel';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  form: FormGroup;

  @Output()
  newSearch$: EventEmitter<string> = new EventEmitter();

  constructor(public formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  handlerSubmit(): void {

    const model: SearchModel = this.form.value as SearchModel;

    this.newSearch$.emit(model.textSearch);

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
