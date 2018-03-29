import { Component, OnInit } from '@angular/core';
import { Campaign } from '../campaign.model';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss']
})
export class CampaignComponent implements OnInit {
  model = new Campaign('','', '','','');;
  constructor(private http: Http){}


    ngOnInit() {}
  get current() { return JSON.stringify(this.model); }

  register() {
    console.log(this.current)
    this.http.post("http://localhost:8000/api/campaigns/", this.current).subscribe(
      response => {
        console.log(response);
      },
      err => {
        console.log("Error occured");
      }
);
}
}
