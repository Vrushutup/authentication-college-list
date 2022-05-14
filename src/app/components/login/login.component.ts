import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  name: any;
  formGroup!: FormGroup;
  constructor(private _formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) { }
    ngOnInit() {
      this.initForm()
    }
  
    initForm() {
      this.formGroup = this._formBuilder.group({
        name: [null, [Validators.required, Validators.name]],
      });
    }
    // login() {
    //   this.formGroup.markAllAsTouched()
    //   if (this.formGroup.valid) {
    //     this.authService.login(this.formGroup.value.name)
    //   }
      
    // }
    handleClear(){
      this.formGroup.reset();
    }
    btnClick=  () => {
      this.router.navigateByUrl('/home');
     };
}
