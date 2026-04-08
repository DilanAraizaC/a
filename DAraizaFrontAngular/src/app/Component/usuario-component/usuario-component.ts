import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../Service/usuario-services';
import { Usuario, UsuarioModel } from '../../Interface/UsuarioModel';

@Component({
  selector: 'app-usuario-component',
  imports: [],
  templateUrl: './usuario-component.html',
  styleUrl: './usuario-component.css',
})
export class UsuarioComponent implements OnInit{


public usuarios : Usuario[] = [];

constructor (private usuarioService: UsuarioService){};

ngOnInit():void{
  this.GetAll();
}

GetAll(){
this.usuarioService.getAll().subscribe(
  (data: any) =>{
    this.usuarios = data.object;
    console.log(data)
  }, error=>{

  }
);
}


}
