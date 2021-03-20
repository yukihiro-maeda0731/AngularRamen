import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { ShopsService } from 'src/app/services/shops.service';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit {
  shops: any[];

  constructor(private service: ShopsService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.activatedRoute.queryParams.subscribe(
      qparams=>{
        let freeword = qparams['freeword'];
        let lat = qparams['lat'];
        let lng = qparams['lng'];
        this.service.searchShops(freeword, lat, lng)
          .subscribe(resp=>this.shops=resp.rest)
      }
    )

  }

  displayShopMap(lat: number, lng: number){
    console.log(lat);
    console.log(lng);
    this.router.navigate(['/shopMap'], { queryParams: {lat: lat,
    lng: lng}});
  }

  decode(encodedURI: string): string {
    return decodeURIComponent(encodedURI)
  }

}
