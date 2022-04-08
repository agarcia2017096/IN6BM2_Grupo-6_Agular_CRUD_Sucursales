import { Component, OnInit } from '@angular/core';
import { Sucursales } from 'src/app/models/sucursales.model';
import { SucursalesService } from 'src/app/services/sucursales.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss'],
  providers: [SucursalesService,UsuarioService]

})

export class DashBoardComponent implements OnInit {
  public token;
  public identidad;

  public coloresDinamicos = ['red','blue','green','yellow','orange']
  public random = Math.floor(Math.random()*this.coloresDinamicos.length)


  //EMPRESAS
  public sucursalesModelGet: Sucursales ;

  constructor(private _sucursalesService: SucursalesService, public _usuarioService: UsuarioService) {
    this.token = this._usuarioService.obtenerToken()
    this.identidad = this._usuarioService.obtenerIdentidad();

  }

  ngOnInit(): void {
    this.getSucursales ()
    console.log(this.identidad)

  }

  getSucursales (){
    this._sucursalesService.ObtenerSucursales (this.token).subscribe(
       (response) => {
         this.sucursalesModelGet = response.Sucursales;
         console.log(response.Sucursales);

       },
       (error)=>{
         console.log(<any>error)
       }
    )}



}
