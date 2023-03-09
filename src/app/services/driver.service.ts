import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Driver} from "../interfaces/driver";

@Injectable({
  providedIn: 'root'
})
export class DriverService {
private  myAppUrl:string;
private  myApiUrl: string;
  constructor(private http: HttpClient) {
    this.myAppUrl= environment.endpoint;
    this.myApiUrl= 'api/drivers/'

  }
  getListDrivers():Observable<Driver[]>{
    return  this.http.get<Driver[]>(`${this.myAppUrl}${this.myApiUrl}`);

  }
  deleteDriver(id: number):Observable<void>{
   return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`)
  }
  saveDrive(drive: Driver) :Observable<void>{
  return  this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, drive)
  }
}
