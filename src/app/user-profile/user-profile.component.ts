import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
    public mother: object;
    public child: object;
    public model: string;

    constructor(private route: ActivatedRoute, private router:Router) {
        this.route.params.subscribe(
            params => {
                if(params.model == "child")
                {
                    this.model = "child";
                    this.child = params;
                    console.log("HAHAHAHHA");
                    console.log(this.child);
                }
                else if(params.model == "mother")
                {
                    this.model = "mother"
                    this.mother = params;
                }
            }
    );
    }

    ngOnInit() {}

    addChild(pk){
        this.router.navigate(["/registration", {model: "child", mother_id: pk}]);
    }

    editMother(mother){
        console.log(mother);
        this.router.navigate(["/registration"], mother)
    }
}
