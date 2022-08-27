import { Component, DoCheck } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements DoCheck {
  name = 'Angular 5';
  stud = ['faa', 'afas'];
  selected: any = 23;
  public nestedForm: FormGroup = new FormGroup({
    ID: new FormControl('', [Validators.required]),
    fname: new FormControl('', [Validators.required]),
    Gender: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    ass: new FormControl('', [Validators.required]),
  });
  ngOnInit() {
    // this.selected = undefined;
  }

  ngDoCheck() {}
  valueChange(event) {
    console.log(
      'selected value',
      event.target.value,
      'value of selected',
      this.selected
    );
    //this.selected = event.target.value;
  }
  save(formValue) {
    console.log('value i got ', this.nestedForm.value);
  }
  clear() {
    this.selected = undefined;
  }
}
