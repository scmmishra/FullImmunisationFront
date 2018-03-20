import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-immunization',
  templateUrl: './immunization.component.html',
  styleUrls: ['./immunization.component.scss']
})
export class ImmunizationComponent implements OnInit {
  public now: Date = new Date();
  childName = "Lorem Ipsum"
  aadharNumber = "1111 2233 4444"
  vaccinesList = [
    {
      name:"BCG1.TITLE",
      timing:"BCG1.TIMING",
      notes:"BCG1.NOTES"
    },
    {
      name:"OPV1.TITLE",
      timing:"OPV1.TIMING",
      notes:"OPV1.NOTES"
    },
    {
      name:"HEPB1.TITLE",
      timing:"HEPB1.TIMING",
      notes:"HEPB1.NOTES"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
