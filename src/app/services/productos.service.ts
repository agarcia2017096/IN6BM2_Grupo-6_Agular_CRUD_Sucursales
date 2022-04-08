import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  public url: String = 'http://localhost:3000/api';
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(public _http: HttpClient) { }

  obtenerProductoId(id : String, token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token)

    return this._http.get(this.url + '/prodcutosEmpresa', { headers: headersToken })
  }

  RegistrarProductos(modeloProducto: Producto, token): Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', token)
    let parametros = JSON.stringify(modeloProducto)
    return this._http.post(this.url + '/agregarProductoEmpresa', parametros, {headers:headersToken})
  }

  eliminarProducto(id : String, token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token)

    return this._http.delete(this.url + '/eliminarProductoEmpresa/' + id, { headers: headersToken })
  }
}
