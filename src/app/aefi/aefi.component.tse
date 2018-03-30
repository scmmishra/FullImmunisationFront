import { Component, OnInit } from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import { Aefi } from '../aefi.module'

@Component({
  selector: 'app-aefi',
  templateUrl: './aefi.component.html',
  styleUrls: ['./aefi.component.scss']
})
export class AefiComponent implements OnInit {
  aefi = new Aefi('','','');
  constructor(private http: Http) { }

  ngOnInit() {
  }

  registerAefi() {
    console.log(this.aefi);
    this.http
        .post('http://localhost:8000/api/campaigns/', this.aefi)
        .subscribe(
            response => {
                console.log(response);
            },
            err => {
                console.log('Error occured');
            }
        );
}
}
