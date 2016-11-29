import { Component, OnInit } from '@angular/core';
import {MytripsService} from "./mytrips.service";

@Component({
  selector: 'ud-mytrips',
  templateUrl: './mytrips.component.html',
  styleUrls: ['./mytrips.component.css']
})
export class MytripsComponent implements OnInit {

  myTripsLog:Array<any>;
  background:string = "";
  constructor(private myTripsService: MytripsService) {
    this.myTripsLog = myTripsService.getMyTrips();
  }

  ngOnInit() {

  }

  clickRow(tripInfo){
    tripInfo.expanded = tripInfo.expanded ? false: true;
    tripInfo.color = tripInfo.expanded ? "#f5f5f5" : "";
  }

}
