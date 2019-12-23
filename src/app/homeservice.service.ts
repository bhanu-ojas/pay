import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HomeserviceService {

 // tslint:disable-next-line: variable-name
 service_url = 'https://reqres.in/api/users';
  constructor(private http: HttpClient) { }
  getDetails() {
    return this.http.get(this.service_url);
  }
}
