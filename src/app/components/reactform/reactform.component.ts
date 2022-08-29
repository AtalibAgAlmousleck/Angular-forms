import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { noSpace } from 'src/app/validations/nospace.validators';

@Component({
  selector: 'app-reactform',
  templateUrl: './reactform.component.html',
  styleUrls: ['./reactform.component.css']
})
export class ReactformComponent implements OnInit {

  form: any;
  emailRegex: string = "[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$";

  constructor(private formBuilder: FormBuilder) {

    this.form = formBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(5), 
        noSpace.noSpaceValidations]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })

    // this.form = new FormGroup({
    //   fullName: new FormControl('', 
    //   [Validators.required, Validators.minLength(3)]
    //   ),
    //   email: new FormControl(
    //     '', [
    //       Validators.required, 
    //       //Validators.pattern(this.emailRegex)
    //       Validators.email,
    //     ]
    //   ),
    //   password: new FormControl(
    //     '', [Validators.required, Validators.minLength(6)]
    //   )
    // });
   }

  //  get fc() {
  //   return this.form.controls ;
  //  }

   get fullname() {
    return this.form.get('fullName');
   }

   get email() {
    return this.form.get('email');
   }

   get password() {
    return this.form.get('password');
   }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.form.value);
    this.form.reset();
  }

}
