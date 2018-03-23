import {Component, OnInit} from '@angular/core';
import {Mother} from '../mother.model';
import {EligibleCouple} from '../eligible-couple.model';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import { Router } from '@angular/router';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
    public now: Date = new Date();
    modelMother = new Mother('', '', '', '', '', '', this.now.toISOString().substring(0, 10), '', '', '', '');
    modelCouple = new EligibleCouple('','','','','','','', this.now.toISOString().substring(0, 10),'','','','','');
    constructor(private http: Http, private router:Router) {}

    ngOnInit() {}
    get currentMother() {
        return JSON.stringify(this.modelMother);
    }

    get currentCouple() {
        return JSON.stringify(this.modelCouple);
    }

    registerMother() {
        console.log(this.currentMother);
        this.http
            .post('http://localhost:8000/api/mothers/', this.currentMother)
            .subscribe(
                response => {
                    var result = response;
                    console.log(result)
                    this.router.navigate(["/user-profile", result.json().data.fields]);
                },
                err => {
                    console.log('Error occured');
                }
            );
    }
}
