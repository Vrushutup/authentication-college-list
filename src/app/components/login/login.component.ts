import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  name!: any;
  formGroup!: FormGroup;
 counter=0
  constructor(private _formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) { }
    ngOnInit() {
      this.initForm()
    }
    
    initForm() {  
      this.formGroup = this._formBuilder.group({
        name: new FormControl(['', [Validators.required]]),
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
    btnClick(data: { name: String; }){
      this.name = data.name;
      localStorage.setItem("name",this.name)
      // localStorage.setItem("counter",this.counter+1)
      this.router.navigateByUrl('/home');
      console.log(this.name);
      alert("welcome "+ this.name);
    };
}
     
