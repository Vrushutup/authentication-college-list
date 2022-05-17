import { Component, Input, OnInit,ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DataService } from 'src/app/core/data.service';
import * as _ from 'lodash'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  name!: any;
  ans!:number
  constructor(private router: Router,
  private service:DataService) { }
   


displayedColumns=['name','country','domains'];
dataSource!:MatTableDataSource<any>;
apiResponse:any=[]
@ViewChild('paginator') paginator!:MatPaginator
  ngOnInit(): void {
    this.name=localStorage.getItem('name')
    this.service.getUserData().subscribe((response:any)=>{
    this.apiResponse=response;
      this.dataSource=new MatTableDataSource(response)
      this.ans=response.length
      this.dataSource.paginator=this.paginator;
    })
  }
  
  btnClick(){
    this.router.navigateByUrl('/');
    localStorage.removeItem('name');
    // localStorage.setItem('ans',this.ans)
  }
  filterData($event:any){
    this.dataSource.filter=$event.target.value;
    // this.ans=this.ans
  }
  onChange($event:any){
   let filteredData = _.filter(this.apiResponse,(item)=>{
     return item.country.toLowerCase() == $event.value.toLowerCase();
   })
   this.dataSource=new MatTableDataSource(filteredData)
  }  
 
}
