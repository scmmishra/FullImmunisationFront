import {Component, OnInit} from '@angular/core';
import {Mother} from '../mother.model';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import {Router, ActivatedRoute} from '@angular/router';
import {RegistermotherComponent} from '../registermother/registermother.component';
import {RegisterchildComponent} from '../registerchild/registerchild.component';


@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
    public mother: object;
    public mother_id: string;
    public currentModel: string;
    constructor(private route: ActivatedRoute, private http: Http, private router:Router) {
        this.route.params.subscribe(
            params => {
                if(params.model == "mother")
                {
                    this.mother = params;
                    this.currentModel = "mother";
                }
                else if(params.model == "child")
                {
                    this.mother_id = params.mother_id;
                    this.currentModel = "child";
                }
            }
        );
    }



    ngOnInit() {}
}
