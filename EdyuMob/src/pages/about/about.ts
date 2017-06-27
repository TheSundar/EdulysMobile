import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';


declare var google;


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

 
  @ViewChild('map') mapElement: ElementRef;
  map: any;
 
  constructor(public navCtrl: NavController) {
 
  }
 
  ionViewDidLoad(){
    console.log('i am here')
    this.loadMap();
  }
 
  loadMap(){
 
    let latLng = new google.maps.LatLng(17.3850, 78.4867);
 
    let mapOptions = {
      center: latLng,
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
 
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    console.log(this.map)
  }
}