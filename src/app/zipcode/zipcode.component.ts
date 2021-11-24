import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { CurrentWeather } from '../model/current-weather';
import { FormModel } from '../model/form-model';

@Component({
  selector: 'app-zipcode',
  templateUrl: './zipcode.component.html',
  styleUrls: ['./zipcode.component.css'],
})
export class ZipcodeComponent implements OnInit {
  // form: FormGroup;
  // zipData: any = [];
  // isSubmited: boolean = false;
  // errorMessage = '';
  // errorflag = false;
  // ZipCode = '';
  // addedData: any[] = [];

  // constructor(
  //   private fb: FormBuilder,
  //   private route: Router,
  //   private api: ApiService
  // ) {
  //   this.form = this.fb.group({
  //     zipInput: ['', [Validators.required]],
  //   });
  //   this.errorflag = false;
  // }

  // onlyNumber(event): boolean {
  //   const charCode = event.which ? event.which : event.keyCode;
  //   if (charCode > 31 && (charCode < 48 || charCode > 57)) {
  //     console.log('charcode not allow' + charCode);
  //     return false;
  //   }
  //   return true;
  // }

  // onSubmit(zipvalues: any) {
  //   console.log(this.form.value);
  //   this.isSubmited = true;
  //   if (this.form.invalid) {
  //     console.log(this.form.value);
  //     return;
  //   }

  //   this.api.getWeather(zipvalues.zipInput).subscribe(
  //     (data) => {
  //       this.zipData = data;
  //       this.errorflag = false;

  //       console.log(this.zipData);
  //     },
  //     (error) => {

  //       this.errorMessage = 'Zip Code not found';
  //       this.errorflag = true;
  //     }
  //   );
  // }

  // dataNotDisplay() {

  //   this.zipData = false;
  // }

  // get zipinputform() {
  //   return this.form.controls;
  // }

  // goToForeCast() {
  //   console.log(this.form.value.zipInput);

  //   this.ZipCode = this.form.value.zipInput;

  //   this.route.navigate(['/forecast/', this.form.value.zipInput]);
  // }

  // addData() {

  //   const dataArry = this.addedData.push(this.zipData);
  //   console.log('DataAdded in arrya', this.addedData);
  // }

  // ngOnInit() {}

  doNotShow: boolean = false;
  formObject = new FormModel('');
  submitted: boolean = false;
  zipCodeArray: any[] = [];
  currentWeather: any[] = [];
  oldCurrentWeather: any[] = [];
  oldZipArray: any[] = [];
  newItem: {};
  errorMsg: string;

  constructor(private weatherService: ApiService) {}

  ngOnInit(): void {
    if (localStorage.getItem('zipCodes') !== null) {
      this.oldZipArray = JSON.parse(localStorage.getItem('zipCodes')!);
      this.oldCurrentWeather = JSON.parse(
        localStorage.getItem('Location Data')!
      );
    }
  }

  onSubmit(weatherForm: NgForm) {
    this.ngOnInit();
    this.zipCodeArray = this.oldZipArray;
    if (
      this.weatherService.isExisting(this.formObject.zip, this.zipCodeArray) ===
      false
    ) {
      this.zipCodeArray.push(this.formObject.zip);
      localStorage.setItem('zipCodes', JSON.stringify(this.zipCodeArray));
      this.weatherService.getCurrentWeather(this.formObject.zip).subscribe(
        (data) => {
          console.log(data);
          this.newItem = new CurrentWeather(
            data.name,
            data.main.temp,
            data.main.temp_max,
            data.main.temp_min,
            data.weather[0].description
          );
          this.currentWeather = this.oldCurrentWeather;
          this.currentWeather.push(this.newItem);
          localStorage.setItem(
            'Location Data',
            JSON.stringify(this.currentWeather)
          );
        },
        (error) => {
          alert((this.errorMsg = 'city not found !! Enter a valid ZipCode'));
        }
      );
    } else {
      alert('ZipCode Already exist in the list below.');
    }
    weatherForm.resetForm();
  }

  onlyNumber(event): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      console.log('charcode not allow' + charCode);
      return false;
    }
    return true;
  }
}
