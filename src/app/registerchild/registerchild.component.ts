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
  modelChild = new Child('1','', '', '', '', '', this.now.toISOString().substring(0, 10));

  constructor(private http: Http, private router:Router) {}

  get currentChild() {
    return JSON.stringify(this.modelChild);
  }

  ngOnInit() {
  }

  registerChild() {
    // console.log(this.currentChild);
    this.http
        .post('http://localhost:8000/api/children/', this.currentChild)
        .subscribe(
            response => {
                var result = response;
                var childData = result.json().data.fields;
                console.log(result.json().data.fields);
                childData['pk'] = result.json().data.pk;
                console.log(childData);
                console.log("Child Registered");
                // this.router.navigate(["/user-profile", childData]);
            },
            err => {
                console.log('Error occured');
            }
        );
}

}
