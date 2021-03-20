import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const baseUrl: string = environment.gurunabiApiUrl;
const hit_per_page = '&hit_per_page=100';
const range = '&range=5';

@Injectable({
  providedIn: 'root'
})
export class ShopsService {
  lat: Number;
  lng: Number;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  searchShops(searchTerm: string, lat: Number, lng: Number): Observable<any> {
    return this.http.get(baseUrl + searchTerm + hit_per_page + '&latitude=' + lat +
      '&longitude=' + lng + range, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          "Access-Control-Allow-Headers": "*", "Access-Control-Allow-Origin": "*"
        }
    });
  }
}
