import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
 
  constructor(private http :HttpClient) { }

 getUserData(){
   return this.http.get('http://universities.hipolabs.com/search?country=india')
 }

}
