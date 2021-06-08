import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-button-submit',
  templateUrl: './button-submit.component.html',
  styleUrls: ['./button-submit.component.scss']
})
export class ButtonSubmitComponent implements OnInit {

  @Input()
  label: string;

  @Input()
  form: FormGroup;

  @Input()
  submitting = false;

  constructor() {
  }

  ngOnInit(): void {
    if (!this.form) {
      throw new Error(`The form is required for ${this.constructor.name}.`);
    }

    if (!this.label) {
      throw new Error(`The label is required for ${this.constructor.name}.`);
    }

  }

}
