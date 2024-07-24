import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { AuthService } from '../service/auth.service';

@Component({
  selector: 'hotel-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [MessageService]
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  options: any;
  mapLoading = false;
  overlays: any[] = [];
  
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router, private messageService: MessageService) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      city: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      cpassword: ['', Validators.required],
      location: this.fb.group({
        address: [{value:'',disabled:true}],
      })
    });
    this.initMap();
  }

  onSubmit() {
    console.log(this.registerForm);
    this.messageService.add({severity:'success', summary: 'Registered Successfully', detail: 'Please login again to continue..'});
    
    // this.auth.register(this.registerForm.value).then(data => {
    //   this.messageService.add({severity:'success', summary: 'Registered Successfully', detail: 'Please login again to continue..'});
    //   this.router.navigate(['login']);
    // }).catch(

    // );
  }
  handleReset() {    
    this.registerForm.reset()
  }

  additionalToggle(event){
    if(!event.collapsed){
      this.initMap();
    }    
    }

    initMap(){
      this.options = { //11.127202340932167, 78.65678787231445
        center: { lat: 11.127202340932167, lng: 78.65678787231445 },
        zoom: 13
      };
      
      const mapOptions = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };
      navigator.geolocation.getCurrentPosition(loc => this.success(loc), err => console.log('map err'), mapOptions);
    }

    success(loc) {
      this.overlays=[];
      const { latitude, longitude } = loc.coords;
      this.options = {
        center: { lat: latitude, lng: longitude },
        zoom: 13
      };
      this.registerForm.patchValue({location:{address: latitude+" "+longitude}})
      this.overlays.push(new google.maps.Marker({
        position: { lat:latitude, lng: longitude },
        title: `My location`, icon: './assets/user.png',draggable:true
      }));
      this.mapLoading = true;
    }

    onMapDraging(event){
      var myLatLng = { lat: event.originalEvent.latLng.lat(), lng: event.originalEvent.latLng.lng() };
      this.registerForm.patchValue({location:{address: myLatLng.lat+" "+myLatLng.lng}})
      console.log('handleclick', myLatLng)
    }

       
}
