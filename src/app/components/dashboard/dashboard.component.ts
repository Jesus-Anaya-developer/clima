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
  temperatura: number = 0;
  humedad: number = 0;
  clima: string = '';
  query: boolean = false;
  loading: boolean = false;
  errorMessage: string = 'Error al obtener el clima';
  mostrarError: boolean = false;

  constructor(private __climaService: ClimaService) { }

  obtenerClima() {

    this.query = false;
    this.loading = true;

    this.__climaService.getClima(this.ciudad).subscribe(data => {
      console.log(data);
      this.loading = false;
      this.query = true;
      this.temperatura = data.main.temp - 273;
      this.humedad = data.main.humidity;
      this.clima = data.weather[0].main;
    }, error => {
      console.log(error);
      this.loading = false;
      this.error();
    });
  }

  error() {
    this.mostrarError = true;
    setTimeout(() => {
      this.mostrarError = false;
      this.ciudad = '';
    }, 3000);
  }

}
