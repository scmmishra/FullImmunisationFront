import {Component, OnInit, Input} from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import {ActivatedRoute, Router} from '@angular/router';
import { ArrayType } from '@angular/compiler/src/output/output_ast';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
    public mother: object;
    public child: object;
    public model: string;
    public children;

    constructor(
        private http: Http,
        private route: ActivatedRoute,
        private router: Router
    ) {
        this.route.params.subscribe(params => {
            if (params.model == 'child') {
                this.model = 'child';
                this.child = params;
                console.log(this.child);
            } else if (params.model == 'mother') {
                this.model = 'mother';
                this.mother = params;
                console.log('http://localhost:8000/api/mothers/' + this.mother['pk'] + '/children/')
                this.getChildren();
            }
        });
    }

    immunizeChild(pk){
        console.log("Redirecting to Immunization Module")
        console.log(pk)
    }
    viewChildProfile(kid){
        console.log(kid);
        kid['model'] = "child";
        this.router.navigate(["/user-profile", kid]);
    }
    getChildren() {
        this.http
            .get('http://localhost:8000/api/mothers/' + this.mother['pk'] + '/children/')
            .subscribe(data => {
                this.children = data.json().data.fields.children;
                // this.children = JSON.stringify(data.json().data.fields.children);
                console.log(typeof this.children[0]);
                console.log(this.children[0]);
            });
    }

    ngOnInit() {

    }

    addChild(pk) {
        this.router.navigate([
            '/registration',
            {model: 'child', mother_id: pk},
        ]);
    }

    editMother(mother) {
        console.log(mother);
        this.router.navigate(['/registration'], mother);
    }
}
