import { Component, OnInit } from '@angular/core';
import {ViewChild, ElementRef} from '@angular/core';



declare var google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage {

  map: any;
  @ViewChild('map',{read: ElementRef,static:false}) mapRef:ElementRef;


  infoWindows: any = [];

  markers: any = [
  {   
    title:"Duoc",
    latitude:"-33.0336892",
    longitude: "-71.5353728"
  },
  {   
    title:"Duoc",
    latitude:"-17.820987",
    longitude: "31.039682"
  }
];
  
  constructor() { }

  ionViewDidEnter() {
    this.showMap();
  }

  addMarkersToMap(markers){
    for (let marker of markers) {
      let position = new google.maps.LatLng(marker.latitude, marker.longitude);
      let mapMarker = new google.maps.Marker({
        position: position,
        title: marker.title,
        latitude: marker.latitude,
        longitude: marker.longitude

      });
      mapMarker.setMap(this.map);
      this.addInfoWindowToMarker(mapMarker);
    }
  }

  addInfoWindowToMarker(marker){
    let infoWindowContent = '<div id="content'> + 
                            '<h2 id="firstHeading" class"firstheading">' +
                            marker.title + '</h2>' +
                            '<p>latitude: '+ marker.latitude + '</p>' +
                            '<p>longitude: '+ marker.longitude + '</p>' +
                            '</div>';
    let infoWindow = new google.maps.infoWindow({
      content: infoWindowContent
  });

  marker.addListener('click', () => {
      this.closeAllInfoWindows();
      infoWindow.open(this.map, marker);
  });
  this.infoWindows.push(infoWindow);
  }

  closeAllInfoWindows(){
    for (let window of this.infoWindows) {
      window.close();
    }
  }
  showMap(){
    const location = new google.maps.LatLng(-33.0336892, -71.5353728);
    const options = {
      center: location,
      zoom: 15, 
      disableDefaultUI: true
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement,options);
    this.addMarkersToMap(this.markers);
  }


}
