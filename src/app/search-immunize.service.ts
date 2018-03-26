import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Immunize } from './Immunize';
@Injectable()
export class SearchImmunizeService {

  constructor(private http: Http) { }

	searchImmunization(id: string, first_name: string, last_name: string): Observable<any[]> {
	  
	  var object: Immunize;
	  object = {
	  	fields: {
	  		id: '',
	  		first_name: '',
	  		last_name: ''
	  	},
	  	entries: 100,
	  	page: 1
	  };

	const headers: Headers = new Headers();
	headers.append('Content-Type', 'application/json');

	//commented section throws errors
	//var tester: any;

	/*function extractData(res: Response): void {
	  let body = res.json();
	  //return body || {}; // removes the 'fields'
	  tester = body.data;
	}*/

	this.http.post('http://localhost:8000/api/children/filter/', JSON.stringify(object), headers)./*map(extractData).*/subscribe(
	  response => {
	    console.log(response);
	  },
	  err => {
	    console.log("Error occured");
	  }
	);

	//console.log(tester);

	return of([{id: "11", name: 'IceDust', pending: ['A', 'B']}, {id: "12", name: 'Batman', pending: ['C', 'D']}]);

	}
}