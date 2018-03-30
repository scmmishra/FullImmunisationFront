import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class SearchService {

  constructor(private http: Http) { }

  searchMother(id: string, first_name: string, last_name: string){
  	let object = {
  		fields: {
	  		id: id,
	  		first_name: first_name,
	  		last_name: last_name,
	  	},
	  	entries: 100,
	  	page: 1
  	}

  	return this.http.post('http://127.0.0.1:8000/api/children/filter/', JSON.stringify(object));
  }
}
