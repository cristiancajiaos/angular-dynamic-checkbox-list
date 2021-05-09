import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.scss']
})
export class FooComponent implements OnInit {

  form: FormGroup;

  elementsData = [1, 2, 3, 5, 10, 15, 25, 50];

  get elFormArray() {
    return this.form.controls.orders as FormArray;
  }

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      orders: new FormArray([])
    });

    this.addCheckbox();
  }

  addCheckbox() {
    this.elementsData.forEach(() => this.elFormArray.push(new FormControl(false)));
  }

  ngOnInit() {
  }

  submit() {
    console.log(this.form);
  }
}
