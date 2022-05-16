import { Component, OnInit,ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';
import {MatCardModule} from '@angular/material/card';
import { ParsedEvent } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  name!: any;
  formGroup!: FormGroup;
 counter!:number
  constructor(private _formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) { }
    ngOnInit() {
      this.initForm();
      localStorage.removeItem('name');
      this.counter=this.counter+1
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
      this.counter=this.counter
      if(this.name!=undefined){
        localStorage.setItem("name",this.name)
        // localStorage.setItem("counter",this.counter )
      }else{
        this.router.navigateByUrl('/login');
      }
      this.router.navigateByUrl('/home');
      // console.log(parseInt(this.counter))
      console.log(this.name);
    };
    _textValue!: string;
ConvertToLower(evt: string) {
    this._textValue = evt.toLowerCase();
}
}
     
