import {Component, OnInit, Input} from '@angular/core';
import {Mother} from '../mother.model';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import {Router} from '@angular/router';

@Component({
    selector: 'app-registermother',
    templateUrl: './registermother.component.html',
    styleUrls: ['./registermother.component.scss'],
})
export class RegistermotherComponent implements OnInit {
    public now: Date = new Date();
    modelMother = new Mother(
        '',
        '',
        '',
        '',
        '',
        '',
        this.now.toISOString().substring(0, 10),
        '',
        '',
        '',
        ''
    );
    // @Input() mother: object;
    constructor(private http: Http, private router: Router) {
    }

    ngOnInit() {}
    get currentMother() {
        return JSON.stringify(this.modelMother);
    }

    registerMother() {
        console.log(this.currentMother);
        this.http
            .post('http://localhost:8000/api/mothers/', this.currentMother)
            .subscribe(
                response => {
                    var result = response;
                    var motherData = result.json().data.fields;
                    motherData['pk'] = result.json().data.pk;
                    motherData['model'] = 'mother';
                    console.log(result.json().data);
                    console.log('Redirecting to Profile');
                    this.router.navigate(['/user-profile', motherData]);
                },
                err => {
                    console.log('Error occured');
                }
            );
    }
}
