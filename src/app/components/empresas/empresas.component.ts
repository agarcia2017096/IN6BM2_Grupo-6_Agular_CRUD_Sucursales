import { Component, OnInit } from '@angular/core';
import { Empresas } from 'src/app/models/empresas.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import { EmpresasService } from 'src/app/services/empresas.service';


@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.scss'],
  providers: [EmpresasService, UsuarioService ]
})

export class EmpresasComponent implements OnInit {
  public token;
  public identidad;


  public coloresDinamicos = ['red','blue','green','yellow','orange']
  public random = Math.floor(Math.random()*this.coloresDinamicos.length)



  //EMPRESAS
  public empresasModelGet: Empresas ;
  public empresasModelPost:Empresas ;


  constructor(private _empresasService: EmpresasService, public _usuarioService: UsuarioService) {
    this.empresasModelPost = new Empresas('','','','','')
    this.token = this._usuarioService.obtenerToken();
    this.identidad = this._usuarioService.obtenerIdentidad();

  }
  ngOnInit(): void {
    this.getEmpresas();

    console.log(this.coloresDinamicos[this.random])

  }

  getEmpresas (){
    this._empresasService.ObtenerUsuarios ().subscribe(
       (response) => {
         this.empresasModelGet = response.Empresas;
         console.log(response.Empresas);

       },
       (error)=>{
         console.log(<any>error)
       }
    )}


  postEmpresas (){
     this._empresasService.RegistrarEmpresas(this.empresasModelPost, this.token = this._usuarioService.obtenerToken()).subscribe(
         (response)=>{
            console.log(response);
            this.getEmpresas()
         },
         (error)=>{
            console.log(<any>error);
         }
     )}

     deleteEmpresa(idEmpresa) {
      this._empresasService.EliminarUsuarios(idEmpresa,  this.token = this._usuarioService.obtenerToken()).subscribe(
        (response)=>{
          console.log(response);
          this.getEmpresas();
        },
        (error)=>{
          console.log(<any>error);

        }
      )
    }

}
