import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-zipcode',
  templateUrl: './zipcode.component.html',
  styleUrls: ['./zipcode.component.css'],
})
export class ZipcodeComponent implements OnInit {
  form: FormGroup;
  zipData: any = [];
  isSubmited: boolean = false;

  constructor(private fb: FormBuilder, private api: ApiService) {
    this.form = this.fb.group({
      zipInput: ['', [Validators.required]],
    });
  }

  onlyNumber(event): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      console.log('charcode not allow' + charCode);
      return false;
    }
    return true;
  }

  onSubmit(zipvalues: any) {
    console.log(this.form.value);
    this.isSubmited = true;
    if (this.form.invalid) {
      return;
    }
    // this.api.getWeather(zipvalues.zip).subscribe((data) => console.log(data));
    this.api.getWeather(zipvalues.zipInput).subscribe((data) => {
      this.zipData = data;
      console.log(data);
    });
  }

  get zipinputform() {
    return this.form.controls;
  }

  ngOnInit() {}
}
