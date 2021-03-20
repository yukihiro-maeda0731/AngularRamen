import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-shop-map',
  templateUrl: './shop-map.component.html',
  styleUrls: ['./shop-map.component.css']
})
export class ShopMapComponent implements OnInit {

  label: string = "P";
  lat: number;
  lng: number;


  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(
      qparams=>{
        this.lat = qparams['lat'];
        this.lat = Number(this.lat);
        this.lng = qparams['lng'];
        this.lng = Number(this.lng);

      }
    )
  }

  closeShopMap() {
    this.router.navigate(['/header']);
  }

}
