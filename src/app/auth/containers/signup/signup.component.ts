import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  
  signupForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.signupForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      birthday: ['', Validators.required]
    })
  }

}
