import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-immunization',
  templateUrl: './immunization.component.html',
  styleUrls: ['./immunization.component.scss']
})
export class ImmunizationComponent implements OnInit {
  public now: Date = new Date();
  childName = "Rochelle D'Sa"
  aadharNumber = "1111 2233 4444"
  vaccinesList = [
    {
      name:"BCG1",
      timing:"At Birth",
      notes:"Administer the vaccine to the newborn before discharging"
    },
    {
      name:"OPV 0",
      timing:"At Birth",
      notes:"Administer the vaccine to the newborn before discharging"
    },
    {
      name:"HEP B1",
      timing:"At Birth",
      notes:"Administer the vaccine to the newborn before discharging"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
