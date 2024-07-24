import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-container',
  templateUrl: './map-container.component.html',
  styleUrls: ['./map-container.component.scss']
})
export class MapContainerComponent implements OnInit {

  markerTitle: string;
  selectedPosition: any;
  options: any;
  mapLoading = false;
  overlays: any[] = [];
  radius: number;
  marker: any[] = [];

  ngOnInit() {
    const mapOptions = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    this.radius = 1500
    navigator.geolocation.getCurrentPosition(loc => this.success(loc), err => console.log('map err'), mapOptions);
  }

  handleOverlayClick(event) {
    var myLatLng = { lat: event.originalEvent.latLng.lat(), lng: event.originalEvent.latLng.lng() };
    console.log('handleclick', myLatLng)
    this.showHideMarkers(myLatLng.lat, myLatLng.lng);
    this.selectedPosition = event.map.center;
  }

  success(loc) {
    const { latitude, longitude } = loc.coords;
    this.options = {
      center: { lat: latitude, lng: longitude },
      zoom: 13
    };
    this.mapLoading = true;
    this.createMarkerData();
    this.showHideMarkers(latitude, longitude);
  }

  showHideMarkers(latitude, longitude) {
    this.overlays = []
    Object.values(this.marker).forEach(value => {
      value.isShown = false;
      const check = this.getDistanceBetween(value.position.lat, value.position.lng, latitude, longitude);;
      value.isShown = check;
      // console.log(value,'vlaue=======')
    });
    this.marker.forEach(el => {
      console.log(el.position, el.isShown)
      if (el.isShown) {
        this.overlays.push(new google.maps.Marker({ ...el }))
      }
    });
    this.overlays.push(new google.maps.Circle({ center: { lat: latitude, lng: longitude }, fillColor: '#1976D2', strokeOpacity: 0, radius: this.radius, draggable: true }));
  }

  getDistanceBetween(lat1, long1, lat2, long2) {
    var from = new google.maps.LatLng({ lat: lat1, lng: long1 });
    var to = new google.maps.LatLng({ lat: lat2, lng: long2 });

    if (google.maps.geometry.spherical.computeDistanceBetween(from, to) <= this.radius) {
      console.log('Distance Between', google.maps.geometry.spherical.computeDistanceBetween(
        from, to
      ));
      return true;
    } else {
      return false;
    }
  }

  createMarkerData() {
    const mapLoc = [[11.127202340932167, 78.65678787231445], [11.140676776401113, 78.66777420043945],
    [11.148025475149904, 78.64710950151365], [11.135207238338705, 78.65260266557615]]
    mapLoc.forEach(el => {
      this.marker.push(
        {
          position: { lat: el[0], lng: el[1] },
          title: `Content no 0.4`, icon: './assets/user.png'
        }
      )
    })
  }
}



