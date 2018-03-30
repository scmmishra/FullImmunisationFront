import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
@Injectable()
export class SearchImmunizeService {

  constructor(private http: Http) { }

	searchImmunization(id: string, first_name: string, last_name: string): Observable<any> {
		
		//building request object
		let object = {
			fields: {
				id: id,
				first_name: first_name,
				last_name: last_name
				},
			related:"immunizations",
			entries: 100,
			page: 1
		}
		
		//configuring header
		const headers: Headers = new Headers();
		headers.append('Content-Type', 'application/json');

		return this.http.post('http://127.0.0.1:8000/api/children/filter/', JSON.stringify(object), headers)
	}
}
