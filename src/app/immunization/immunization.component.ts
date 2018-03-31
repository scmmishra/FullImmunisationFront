import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

//for return from service
import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { SearchImmunizeService } from '../search-immunize.service';
//user-profile;first_name=asdf;last_name=asdf;mobile1=1233121231;mobile2=1233211231;
@Component({
  selector: 'app-immunization',
  templateUrl: './immunization.component.html',
  styleUrls: ['./immunization.component.scss']
})
export class ImmunizationComponent implements OnInit {
  immList$: Observable<any[]>;
  immList: any;
  private searchTerms1 = new Subject<string>();
  private searchTerms2 = new Subject<string>();


  public items: any[][];
  constructor(private immServe: SearchImmunizeService, private route: ActivatedRoute, private router:Router) {
    this.route.params.subscribe(
      params => {
        if(id>-1){
          console.log("Found");
        }
      }
    )
  id: string = "";
  first_name: string = "";
  last_name: string = "";
  makeVisible: boolean = false; //alter the visiblity of search result division
  search1(id: string, first_name: string, last_name: string): void {  //pass whichever variable changes
    
    if (this.id != id){
      this.id = id;
      //this.searchTerms1.next(id);
    } else if (this.first_name != first_name){
      this.first_name = first_name;
      //this.searchTerms1.next(first_name);
    } else {
      this.last_name = last_name;
      //this.searchTerms1.next(last_name);
    }
    if (id == "" && first_name == "" && last_name == ""){
      this.makeVisible = false; //set false if none of the fields is filled
      this.selectedValues = [];
      this.selectedIds = [];
      this.immList = []
    } else {
      this.makeVisible = true; //else set true
      this.immServe.searchImmunization(id, first_name, last_name).subscribe(data => {this.immList = data.json().data; console.log(data.json().data)});
    }
      
  }

 
  Submit(id){
    let index = this.selectedIds.indexOf(id);
    if(index == -1){                                   //something's probably wrong with the user
      console.log("I miss Python...");
    }
    else{
      console.log({id: id, date: new Date().toISOString().substring(0,10), vaccinesRem: this.selectedValues[index].toString(), campaign_id: 2, centre_id: 2});
      console.log(this.selectedValues[index].toString())
      //this.immServe.sendImmunizations(id, new Date().toISOString().substring(0,10), selectedValues[index].toString(), 2, 2).subscribe()

      for (var vacc of this.selectedValues[index]){
        if (this.selectedValues.indexOf(vacc) != this.selectedValues.length - 1){
          this.immServe.sendImmunizations(id, new Date().toISOString().substring(0,10), vacc, 2, 2).subscribe();
        } else {
          this.immServe.sendImmunizations(id, new Date().toISOString().substring(0,10), vacc, 2, 2).subscribe(
            data => {
              this.immServe.searchImmunization(this.id, this.first_name, this.last_name).subscribe(
                data => {
                  this.immList = data.json().data; console.log(data.json().data)
                  this.selectedValues = [];
                  this.selectedIds = [];
                }
              );
  
            }
          );
        }
      }

      this.immServe.searchImmunization(this.id, this.first_name, this.last_name).subscribe(data => {this.immList = data.json().data; console.log(data.json().data)});
      this.selectedValues = [];
      this.selectedIds = [];
      //conditional clearing of the specific entry or refresh the entire page in case of failure
    }
  }
  
  selectedValues = [];
  selectedIds = [];

  change(id, vacc){
    console.log(this.selectedValues.length);

    /*Managing Ids*/
    if(this.selectedIds.indexOf(id) == -1){             //selection of new id
      this.selectedIds.push(id);
      this.selectedValues.push([vacc]);
    } else {                                            //existing Id
      
      let idIndex = this.selectedIds.indexOf(id);
      let index = this.selectedValues[idIndex].indexOf(vacc);
      
      if(index > -1){
        this.selectedValues[idIndex].splice(index, 1);  //if found again in list, delete because it means checkbox has been unselected
      } else {
        this.selectedValues[idIndex].push(vacc);        //else add it to the list
        console.log(this.selectedValues.length);
      }

    }
    console.log(this.selectedValues[this.selectedIds.indexOf(id)]);    
  }

  
  ngOnInit(){
    //this.immList$ = this.searchTerms1.pipe(debounceTime(300), switchMap((term: string) => this.immServe.searchImmunization(this.id, this.first_name, this.last_name)));
  }
  
}