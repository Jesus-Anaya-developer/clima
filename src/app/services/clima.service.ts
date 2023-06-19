import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  url: string = 'https://api.openweathermap.org/data/2.5/weather?q=';
  key: string = '&appid=eb1553364549c5a24c7b3d68af52563b';

  constructor(private http: HttpClient) { }

  getClima(ciudad: string): Observable<any> {
    const url = this.url + this.key + ciudad;
    return this.http.get(url);
  }
}
