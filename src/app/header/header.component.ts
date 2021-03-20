import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }
  queryTerm: string;
  
  ngOnInit(): void {
    this.getLocation();
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        if (position) {
          this.router.navigate(['/shops'], { queryParams: {freeword: "ラーメン", lat: position.coords.latitude,
          lng: position.coords.longitude}});
        }
      },
        (error) => console.log(error));
    } else {
      alert("ブラウザが非対応です");
    }
  }
  
  /*
  submitHandler(evt){
    evt.preventDefault();
    this.router.navigate(['/shops'], { queryParams: {freeword: this.queryTerm}});
  }
  */
  

}
