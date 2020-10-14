import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl = 'http://localhost:8000/api/cisco/';

  constructor(private httpClient: HttpClient) {}

  getMain() {
    return this.httpClient.get(this.baseUrl);
  }
}
