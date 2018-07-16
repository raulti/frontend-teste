import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json; charset=utf-8'})
};

@Injectable()
export class CountryService {

  urlBase = 'http://localhost:8000/api/country/';
  

  constructor(private http: HttpClient) { }

  /**
   * Retorna rota para consumo do serviço na API de acordo com urlBase e rota relativa
   *
   * @param rota
   */
  getRouter(rota) {
    return this.urlBase + rota;
  }

  /**
   * Recupera lista de países.
   */
  getCountrys() {
    return this.http.get(this.getRouter('list'));
  }

  /**
   * Disponibiliza arquivo no formato .csv para download.
   */
  downloadCsv(){
    return this.http.get(this.getRouter('csv'), {responseType: 'blob'});
  }

  /**
   * Disponibiliza arquivo no formato .xlsx para download.
   */
  downloadXlsx(){
    return this.http.get(this.getRouter('xlsx'), {responseType: 'blob'});
  }

}
