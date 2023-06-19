import { Component } from '@angular/core';
import { ClimaService } from 'src/app/services/clima.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  urlImagen: string = 'https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-1024.png';
  ciudad: string = '';

  constructor(private __climaService: ClimaService) { }

  obtenerClima() {

    this.__climaService.getClima(this.ciudad).subscribe(data => {
      console.log(data);
    });
  }

}
