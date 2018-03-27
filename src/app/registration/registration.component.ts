import {Component, OnInit} from '@angular/core';
import {Mother} from '../mother.model';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import { Router } from '@angular/router';
import {RegistermotherComponent} from '../registermother/registermother.component';
import {RegisterchildComponent} from '../registerchild/registerchild.component';


@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
    constructor(private http: Http, private router:Router) {}

    ngOnInit() {}
}
