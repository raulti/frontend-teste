import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface Contato {
  nome: string;
  sobreNome: string;
  dtNascimento:string;
  email: string;
  telefone: string;
  cpf: string;
  celular: string;
}

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

}
