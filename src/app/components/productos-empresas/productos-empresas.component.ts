import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';
import { ActivatedRoute } from '@angular/router';
import { CargarJavascriptService } from 'src/app/services/cargar-javascript.service';
import { ProductosService } from 'src/app/services/productos.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-productos-empresas',
  templateUrl: './productos-empresas.component.html',
  styleUrls: ['./productos-empresas.component.scss'],
  providers: [ ProductosService, UsuarioService ]
})
export class ProductosEmpresasComponent implements OnInit {
  public productoModelGet: Producto;
  public productoModelPost: Producto;

  public token
  public identidad;

  constructor(
    private _CargaScripts:CargarJavascriptService,
    public _activatedRoute: ActivatedRoute,
    private _productoService: ProductosService,
    public _usuarioService: UsuarioService) {

  _CargaScripts.Carga(["main"]);
  //this.productoModelGet = new Productos('','','',0,0,'');
  this.productoModelPost = new Producto('','','',0,0,'');
  this.token = this._usuarioService.obtenerToken();
  this.identidad = this._usuarioService.obtenerIdentidad();

   }

   public idEmpresa;
  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((dataRuta)=>{
      console.log(dataRuta.get('idEmpresa'));
      this.getProductoId(dataRuta.get('idEmpresa'))
      this.idEmpresa = dataRuta.get('idEmpresa')
    })
  }
  getProductoId(idEmpresa){
    this._productoService.obtenerProductoId(idEmpresa, this.token).subscribe(
      (response)=>{
        this.productoModelGet = response.producto;
        console.log(response);
      },
      (error)=>{

      }
    )
  }
  postProductos() {
    this._productoService.RegistrarProductos(this.productoModelPost, this.token).subscribe(
      (response) => {
        this.getProductoId(this.idEmpresa)
      },
      (error) => {
        console.log(<any>error);
      }
    )
  }
  deleteProductos(idEmpresa) {
    this._productoService.eliminarProducto(idEmpresa, this.token).subscribe(
      (response)=>{
        console.log(response);
        this.getProductoId(idEmpresa);
      },
      (error)=>{
        console.log(<any>error);

      }
    )
  }

}
