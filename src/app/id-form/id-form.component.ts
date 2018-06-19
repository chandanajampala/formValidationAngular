import { Component, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { Http } from '@angular/http';

import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-id-form',
  templateUrl: './id-form.component.html',
  styleUrls: ['./id-form.component.css']
})
export class IdFormComponent implements OnInit {
  idFormGroup: FormGroup;
  
  constructor() { 
      this.idFormGroup= new FormGroup({
        firstName: new FormControl('', Validators.required),
        
        fullName: new FormControl('', Validators.required),
        desig: new FormControl('', Validators.required),
        empCode: new FormControl('', Validators.required),
        bloodGroup: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
        empNo: new FormControl('', Validators.required),
         emergencyNo: new FormControl('', Validators.required),
      })
  }
  onSubmit(){
    console.log("hellio");
  }
  ngOnInit() {
  }
  log(){
    console.log(this.idFormGroup);
  }
}
