import {Component, OnInit, Input} from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import {ActivatedRoute, Router} from '@angular/router';

import {ArrayType} from '@angular/compiler/src/output/output_ast';
import { SearchService } from '../search.service';


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
    public profileList: any[];

    constructor(
        private http: Http,
        private route: ActivatedRoute,
        private router: Router,
        private searchServ: SearchService
    ) {
        this.route.params.subscribe(params => {
            if (params.model == 'child') {
                this.model = 'child';
                this.child = params;
                console.log(this.child);
            } else if (params.model == 'mother') {
                this.model = 'mother';
                this.mother = params;
                console.log(
                    'http://localhost:8000/api/mothers/' +
                        this.mother['pk'] +
                        '/children/'
                );
                this.getChildren();
            }
        });
    }

    search(id: string){
        let first_name = "";
        let last_name = "";
        this.searchServ.searchMother(id, first_name, last_name).subscribe(data => {this.profileList = data.json().data; console.log(data.json().data)});
    }

    immunizeChild(primk){
        console.log(primk)
    }
    viewChildProfile(kid) {
        console.log('Redirecting to Profile Page');
        console.log(kid);
        kid['model'] = 'child';
        this.router.navigate(['/user-profile', kid]);
    }
    getChildren() {
        this.http
            .get(
                'http://localhost:8000/api/mothers/' +
                    this.mother['pk'] +
                    '/children/'
            )
            .subscribe(data => {
                this.children = data.json().data.fields.children;
                // this.children = JSON.stringify(data.json().data.fields.children);
                console.log(typeof this.children[0]);
                console.log(this.children[0]);
            });
    }

    ngOnInit() {}

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
