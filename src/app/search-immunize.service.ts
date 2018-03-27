import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class SearchImmunizeService {

  constructor() { }

	searchImmunization(id: string, first_name: string, last_name: string): Observable<any[]> {
	  /*
	  if (!term.trim()) {
	    // if not search term, return empty hero array.
	    return of([]);
	  }
	  return this.http.get<Immunize[]>(`api/immunize/?name=${term}`);*/
	  return of([{id: "11", name: 'IceDust', pending: ['A', 'B']}, {id: "12", name: 'Batman', pending: ['C', 'D']}]); //{id: "11", name: 'Mr. Nice'}, {id: "11", name: 'Mr. Nice'}
	}
}