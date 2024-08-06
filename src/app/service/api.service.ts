import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  getproduct(){
    // return this.http.get<any>("https://fakestoreapi.com/products")      
    return this.http.get<any>("https://dummyjson.com/products")      

    .pipe(map((res:any)=>{  
      // console.log(typeof res) 
      return res;
    }
  )
  )
  }
}
