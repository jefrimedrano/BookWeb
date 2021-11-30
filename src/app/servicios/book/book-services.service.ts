import { Injectable } from '@angular/core';


import { environment } from "../../../environments/environment";
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { Book } from './Book';

@Injectable({
  providedIn: 'root'
})
export class BookServicesService {

UrlApi : string = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  GetAll(){

    return this.httpClient.get(this.UrlApi + "v1/Books");
  }
}
