import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class SearchService {

  constructor(private http: Http) { }

  searchMother(id: number, first_name: string, last_name: string){
  	let object = {
  		fields: {
			id: id,  
	  		first_name: first_name,
	  		last_name: last_name,
	  	},
	  	entries: 100,
	  	page: 1
	}
	  
	console.log(object.fields.id)

  	return this.http.post('http://127.0.0.1:8000/api/mothers/filter/', JSON.stringify(object));
  }
}
