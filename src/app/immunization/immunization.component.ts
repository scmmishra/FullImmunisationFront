import { Component, OnInit } from '@angular/core';

//for return from service
import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { SearchImmunizeService } from '../search-immunize.service';

@Component({
  selector: 'app-immunization',
  templateUrl: './immunization.component.html',
  styleUrls: ['./immunization.component.scss']
})
export class ImmunizationComponent implements OnInit {
  immList$: Observable<any[]>;
  private searchTerms1 = new Subject<string>();
  private searchTerms2 = new Subject<string>();

  constructor(private immServe: SearchImmunizeService) { }

  id: string = "";
  first_name: string = "";
  last_name: string = "";

  search1(id: string, first_name: string, last_name: string): void {  //pass whichever variable chanfes
    if (this.id != id){
      this.id = id;
      this.searchTerms1.next(id);
    } else if (this.first_name != first_name){
      this.first_name = first_name;
      this.searchTerms1.next(first_name);
    } else {
      this.last_name = last_name;
      this.searchTerms1.next(last_name);
    }
      
  }

  ngOnInit(){
    this.immList$ = this.searchTerms1.pipe(debounceTime(300), switchMap((term: string) => this.immServe.searchImmunization(this.id, this.first_name, this.last_name)));
  }
}
