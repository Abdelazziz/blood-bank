import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StockslistService {
  private REST_API_SERVER = 'http://192.168.0.107:8080/stock';

  constructor(private httpClient: HttpClient) { }
  
  public sendGetRequest(){
    return this.httpClient.get(this.REST_API_SERVER);
  }
}
