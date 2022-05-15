import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  name!: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.name=localStorage.getItem('name')
  }

  btnClick(){
    this.router.navigateByUrl('/');
      localStorage.removeItem('name');
  }

}
