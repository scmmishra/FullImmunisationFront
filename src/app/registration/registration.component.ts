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
    public child:object;
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
                    this.child = params;
                    this.currentModel = "child";
                }
            }
        );
    }



    ngOnInit() {}
}
