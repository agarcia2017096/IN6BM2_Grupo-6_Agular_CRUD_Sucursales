import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empresas } from 'src/app/models/empresas.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [UsuarioService]
})
export class LoginComponent implements OnInit {
  public usuarioModel: Empresas;
  constructor(
    private _usuarioService:UsuarioService,
    private _router: Router
    ) {
    this.usuarioModel = new Empresas(
      "",
      "",
      "",
      "",
      ""
    );
  }

  ngOnInit(): void {
  }

  // getToken(){
  //   this._usuarioService.login(this.usuarioModel, "true").subscribe(
  //     (response)=>{
  //       console.log(response);
  //       localStorage.setItem("token", response.token)

  //     },
  //     (error)=>{
  //       console.log(<any>error);

  //     }
  //   )
  // }

  getTokenPromesa(): Promise<any> {
    return new Promise((resolve, reject)=>{
      this._usuarioService.login(this.usuarioModel, "true").subscribe(
        (response)=>{
         console.log(response);
          localStorage.setItem("token", response.token)
          resolve(response);
        },
        (error)=>{
          console.log(<any>error);

        }
      )
    })
  }

  login(){
    this._usuarioService.login(this.usuarioModel,'false').subscribe(
      (response)=>{
        this.getTokenPromesa().then((respuesta)=>{
          localStorage.setItem("identidad", JSON.stringify(response.usuario))
          console.log(response);
          console.log(response.usuario.rol)
          if(response.usuario.rol == "Empresa"){
            this._router.navigate(['/dash-board']);
          }else {
            this._router.navigate(['/empresas']);
          }
        })

      },
      (error)=>{
        console.log(<any>error);
      }
    )
  }
}
