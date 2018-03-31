import {Component, ViewChild, OnInit} from '@angular/core';
import * as Chartist from 'chartist';
import Chart from "frappe-charts/dist/frappe-charts.min.esm"
import {HeatmapLayer} from '@ngui/map';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  @ViewChild(HeatmapLayer) heatmapLayer: HeatmapLayer;
  heatmap: google.maps.visualization.HeatmapLayer;
  map: google.maps.Map;
  points = [];

    public now: Date = new Date();
    constructor() {}
    ngOnInit() {
        /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */
        this.heatmapLayer['initialized$'].subscribe(heatmap => {
            this.points = [
                new google.maps.LatLng(22.40750361337623, 88.22472558594366),
                new google.maps.LatLng(22.484738519411454, 88.24303733396073),
                new google.maps.LatLng(22.085836340518, 88.30214564008828),
                new google.maps.LatLng(22.37953745266127, 88.01729951199026),
                new google.maps.LatLng(22.093369215785142, 88.42500541911939),
                new google.maps.LatLng(22.383507788518305, 88.43507416051085),
                new google.maps.LatLng(22.138445710310716, 88.196836504159),
                new google.maps.LatLng(22.343312266746445, 88.3543259424856),
                new google.maps.LatLng(22.206059492621083, 88.22954355630407),
                new google.maps.LatLng(22.12927211503724, 88.37016604283754),
                new google.maps.LatLng(22.207152107626655, 88.45333261181759),
                new google.maps.LatLng(22.487789447681237, 88.37218828413219),
                new google.maps.LatLng(22.118834058541374, 88.27003429371467),
                new google.maps.LatLng(22.390020674341933, 88.25216058626862),
                new google.maps.LatLng(22.326518087276217, 88.36958051718307),
                new google.maps.LatLng(22.303490859836646, 88.18619650490699),
                new google.maps.LatLng(22.31207742471968, 88.16609535194303),
                new google.maps.LatLng(22.34634156359258, 88.0258712315103),
                new google.maps.LatLng(22.117844944560186, 88.18560880695074),
                new google.maps.LatLng(22.29482141369899, 88.24635178485997),
                new google.maps.LatLng(22.44623698542968, 88.09862028865226),
                new google.maps.LatLng(22.219871240968324, 88.3730721438076),
                new google.maps.LatLng(22.017018147358833, 88.07300407175892),
                new google.maps.LatLng(22.448877187178805, 88.02686069180253),
                new google.maps.LatLng(22.480403343212917, 88.41495333245884),
                new google.maps.LatLng(22.1957154407675, 88.00098400395626),
                new google.maps.LatLng(22.14570832679298, 88.39230197064607),
                new google.maps.LatLng(22.222397283156276, 88.12698053743019),
                new google.maps.LatLng(22.368886566425292, 88.47823407631049),
                new google.maps.LatLng(22.121893817981668, 88.43133582093013),
                new google.maps.LatLng(22.276659715978102, 88.05273061542783),
                new google.maps.LatLng(22.318106512902524, 88.30654550123096),
                new google.maps.LatLng(22.256177013041846, 88.35863254160869),
                new google.maps.LatLng(22.497384941383956, 88.4365106465527),
                new google.maps.LatLng(22.308871712676197, 88.45645203626152),
                new google.maps.LatLng(22.264228420911582, 88.22451030108677),
                new google.maps.LatLng(22.312494347238925, 88.18363786509585),
                new google.maps.LatLng(22.324398902010756, 88.20724490185621),
                new google.maps.LatLng(22.45731502104467, 88.07543379713918),
                new google.maps.LatLng(22.4964811391165, 88.13348770477083),
                new google.maps.LatLng(22.474691837706267, 88.04887051310533),
                new google.maps.LatLng(22.338015469467187, 88.01412425121448),
                new google.maps.LatLng(22.30931076217904, 88.2490753964671),
                new google.maps.LatLng(22.19621955548763, 88.47201981119503),
                new google.maps.LatLng(22.296674186784486, 88.47393597153233),
                new google.maps.LatLng(22.012608723065412, 88.1990068496885),
                new google.maps.LatLng(22.148963357170583, 88.22142292934672),
                new google.maps.LatLng(22.365295539979915, 88.40462383844437),
                new google.maps.LatLng(22.12137201989703, 88.46385274793548),
                new google.maps.LatLng(22.242958612673785, 88.39054570385997),
                new google.maps.LatLng(22.094843978455895, 88.07308227928843),
                new google.maps.LatLng(22.06797230405657, 88.05475635119832),
                new google.maps.LatLng(22.010586079221543, 88.02594395618284),
                new google.maps.LatLng(22.004451263062794, 88.06062536646444),
                new google.maps.LatLng(22.083757030143218, 88.08933110026321),
                new google.maps.LatLng(22.078579478033642, 88.06284914974226),
                new google.maps.LatLng(22.07284694158717, 88.0601328966747),
                new google.maps.LatLng(22.058702710022448, 88.09055815744428),
                new google.maps.LatLng(22.03724473745529, 88.00777672671369),
                new google.maps.LatLng(22.071238753073285, 88.05878520497676),
                new google.maps.LatLng(22.05297630533002, 88.0481581250528),
                new google.maps.LatLng(22.05750865479169, 88.01131638342683),
            ];
            this.heatmap = heatmap;
            this.map = this.heatmap.getMap();
        });

        const dataRIC = {
            labels: ["2015", "2016", "2017", "2018",
                "2019", "2020"
            ],
            datasets: [
                {
                    name: "Target", type: "line",
                    values: [78, 79, 80, 81, 82, 83]
                },
                {
                    name: "Target", type: "line",
                    values: [80, 81, 82, 83, 84, 85]
                },
                {
                    name: "3rd dose of Pentavalent", type: "line",
                    values: [80, 80]
                },
                {
                    name: "1st dose for Measles", type: "line",
                    values: [78, 78]
                }
            ]
        }

        const RIC = new Chart("#RIC", { // or a DOM element
            data: dataRIC,
            type: 'line', // or 'bar', 'line', 'scatter', 'pie', 'percentage'
            height: 250,
            colors: ['#a8a8a8','#2d2d2d','#14b559', '#e53935'],
        })

        /* ----------==========     Completed Tasks Chart initialization    ==========---------- */

        const dataCampaign = {
            labels: ["Nov '17", "Dec '17", "Jan '18", "Feb '18",
                "Mar '18"
            ],
            yMarkers: [
                {
                    label: "Monthly Mobile Target",
                    value: 35,
                    // type: 'dashed'
                }
            ],
            datasets: [
                {
                    name: "Mobile",
                    values: [58, 40, 30, 35, 40],
                    axisPosition: 'right',
                    chartType: 'bar'
                },
                {
                    name: "Centre Campaign",
                    values: [30, 50, 10, 15, 30],
                    axisPosition: 'right',
                    chartType: 'bar'
                }
            ]
        }

        const campaign = new Chart("#campaign", { // or a DOM element
            data: dataCampaign,
            type: 'bar', // or 'bar', 'line', 'scatter', 'pie', 'percentage'
            height: 250,
            colors: ['#ffa726', '#e53935'],
        })

        // start animation for the Completed Tasks Chart - Line Chart

        /* ----------==========     Emails Subscription Chart initialization    ==========---------- */

        const dataPenta = {
            labels: ["Dose 1", "Dose 2", "Dose 3", "Dose 4",
                "Dose 5", "Dose 6"
            ],
            datasets: [
                {
                    name: "OPV", type: "line",
                    values: [92, 85, 76, 75, 72, 70]
                },
                {
                    name: "Penta", type: "line",
                    values: [80, 76, 72, 68, 65]
                }
            ]
        }

        const Penta = new Chart("#Penta", { // or a DOM element
            data: dataPenta,
            type: 'line', // or 'bar', 'line', 'scatter', 'pie', 'percentage'
            height: 250,
            colors: ['#e53935'],
            lineOptions: {
                dotSize: 4,          // default: 4
                hideLine: 0,         // default: 0
                hideDots: 0,         // default: 0
                heatline: 0,         // default: 0
                regionFill: 1        // default: 0
              }
        })

        const dataDisease = {
            labels: ["Low Birth Weight", "Pneumonia", "TB", "Measles",
            ],
            datasets: [
                {
                    name: "Vaccines", type: "pie",
                    values: [90,60,80,130]
                },
                {
                    name: "Penta", type: "line",
                    values: [80, 76, 72, 68, 65]
                }
            ]
        }

        const Disease = new Chart("#Disease", { // or a DOM element
            data: dataDisease,
            type: 'pie', // or 'bar', 'line', 'scatter', 'pie', 'percentage'
            height: 250,
            lineOptions: {
                dotSize: 4,          // default: 4
                hideLine: 0,         // default: 0
                hideDots: 0,         // default: 0
                heatline: 0,         // default: 0
                regionFill: 1        // default: 0
              }
        })



    }
}
