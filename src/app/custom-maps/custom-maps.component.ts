import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";
import any = jasmine.any;
import {MapsAPILoader} from "angular2-google-maps/core";
import {validateConfig} from "@angular/router/src/config";

declare var google: any;


@Component({
  selector: 'ud-custom-maps',
  templateUrl: './custom-maps.component.html',
  styleUrls: ['./custom-maps.component.css']
})
export class CustomMapsComponent{
  src_lat: number = 12.981809528732812;
  src_lng: number = 77.607421875;
  src_string : string;

  mapCenter = {
    lat: 12.981809528732812,
    lng : 77.607421875
  }

  minimum_fare:number = 50;
  minimum_distance:number = 4;  // in kms
  charges:number = 8;           // in Rs.

  estimated_cost:number;


  des_lat:number;
  des_lng:number;
  des_string : string;

  isSrcSet:boolean = false;
  isDesSet:boolean = false;

  bookCabForm:FormGroup;

  // mypos:any = {};
  zoom_level = 8;

  // geoCoder:any;

  constructor(private formBuilder: FormBuilder, private _loader: MapsAPILoader){
    this.bookCabForm = formBuilder.group({
      'pickup':['',[Validators.required]],
      'drop':['',[Validators.required]]
    });

  }

  autocomplete(el) {
    el.srcElement.placeholder="";
    this._loader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(el.srcElement, {});
      google.maps.event.addListener(autocomplete, 'place_changed', () => {
        let place = autocomplete.getPlace();
        if(el.srcElement.id.match("pickup-input")) {
          this.mapCenter.lat = this.src_lat = place.geometry.viewport.f.f;
          this.mapCenter.lng = this.src_lng = place.geometry.viewport.b.b;
          this.src_string = place.formatted_address;
          this.isSrcSet = true;
        }
        else {
          this.mapCenter.lat = this.des_lat = place.geometry.viewport.f.f;
          this.mapCenter.lng = this.des_lng = place.geometry.viewport.b.b;
          this.des_string = place.formatted_address;
          this.isDesSet = true;
        }
        this.estimateCost();
        this.zoom_level = 14;
      });
    });
  }

  onCenterChange(e){
    this.mapCenter=e;
  }

  estimateCost(){
    console.log(this.isSrcSet+" "+this.isDesSet)
      if(this.isSrcSet && this.isDesSet){
        var origin1 = new google.maps.LatLng(this.src_lat, this.src_lng);
        var origin2 = this.src_string;

        var destinationA = this.des_string;
        var destinationB = new google.maps.LatLng(this.des_lat, this.des_lng);

        var service = new google.maps.DistanceMatrixService();
        service.getDistanceMatrix(
          {
            origins: [origin1, origin2],
            destinations: [destinationA, destinationB],
            travelMode: 'DRIVING',
          }, this.distanceCallback.bind(this));
      }
  }

  distanceCallback(response, status){
    var distance = response.rows[0].elements[0].distance.value / 1000;
    var time = response.rows[0].elements[0].duration.value / 60;
    console.log("Estimated Cost:");
    console.log(this);
    this.estimated_cost = this.minimum_fare + (distance - this.minimum_distance)*this.charges + time;
    // var cost = 50 + (distance - 4)*8 + time;
    // console.log(cost);
  }

  // setSource(){
  //   //console.log(this.mypos);
  //    console.log(this.mapCenter);
  //   this.src_lat = this.mypos.lat;
  //   this.src_lng = this.mypos.lng;
  //   this.mapCenter = this.mypos;
  //   this.zoom_level = 14;
  //   // console.log(this.mapCenter);
  // }

  // setCurrentLocation(position){
  //   if(this) {
  //     this.mypos = {lat: position.coords.latitude, lng: position.coords.longitude};
  //     console.log(this.mypos);
  //   }
  // }
  //
  // ngAfterViewChecked(){
  //   if(navigator.geolocation){
  //     navigator.geolocation.getCurrentPosition(this.setCurrentLocation.bind(this));
  //   }
  // }

  // onMapClick(e){
  //   console.log(e);
  //   if(this.isSrc) {
  //     this.src_lat = e.coords.lat;
  //     this.src_lng = e.coords.lng;
  //
  //   }
  //   else {
  //     this.des_lat = e.coords.lat;
  //     this.des_lng = e.coords.lng;
  //   }
  //
  // }

}
