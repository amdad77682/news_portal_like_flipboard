import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {FormsModule} from '@angular/forms'
import { EventEmitter,Input, OnInit, Output,NgModule} from '@angular/core';
import { Router} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Http, Response, Headers, RequestOptions } from "@angular/http";
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  formdata;
  emailid;
  private url1='http://www.omdbapi.com/?t=Game%20of%20Thrones&Season=1&apikey=5011fed4';
  private url2='http://www.omdbapi.com/?s=batman&page=2&apikey=5011fed4';
  data: any={};
  array: any={};
  constructor(private http:Http) {
    this.getData();
    //this.getContent();
   
  }
  
    
    
     
  
  getData(){
     return this.http.get(this.url2).map((res:Response)=>res.json())
  }
  getContent(){
    this.getData().subscribe(data=>{
      console.log(data);
      this.data=data;
    })
  }
  stateCtrl: FormControl;
  ngOnInit() {
    this.getData().subscribe(data=>{
      
      this.array=data.Search;
      console.log(this.array);
      // this.checkAndInstantiateWeb3();
     
  

    })
    
  // console.log(this.formdata.value);

  }
  search(data) {
   // this.emailid = data.emailid;
  }
 
 
}
