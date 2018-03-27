import { Component, OnInit } from '@angular/core';
import {Child} from '../child.model';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registerchild',
  templateUrl: './registerchild.component.html',
  styleUrls: ['./registerchild.component.scss']
})
export class RegisterchildComponent implements OnInit {
  public now: Date = new Date();
  modelChild = new Child('','', '', '', '', '', this.now.toISOString().substring(0, 10));

  constructor(private http: Http, private router:Router) {}

  get currentChild() {
    return JSON.stringify(this.modelChild);
  }

  ngOnInit() {
  }

}
