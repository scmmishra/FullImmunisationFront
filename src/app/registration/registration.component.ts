import {Component, OnInit} from '@angular/core';
import { Mother } from '../mother.model';
import { Http, Response, RequestOptions, Headers } from '@angular/http';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  model = new Mother('','', '','', '','','','','');;
  constructor(private http: Http){}

  ngOnInit() {}
  get current() { return JSON.stringify(this.model); }

  register() {
    console.log(this.current)
    this.http.post("http://127.0.0.1:8000/api/mothers/", this.current).subscribe(
      response => {
        console.log(response);
      },
      err => {
        console.log("Error occured");
      }
    );
  }
}
