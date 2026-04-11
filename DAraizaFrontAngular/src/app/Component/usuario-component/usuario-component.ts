import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../Service/usuario-services';
import { UsuarioModel } from '../../Interface/UsuarioModel';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-usuario-component',
  imports: [RouterLink],
  templateUrl: './usuario-component.html',
  styleUrl: './usuario-component.css',
})
export class UsuarioComponent implements OnInit {


  public usuarios: UsuarioModel[] = [];
  public identificador: number | undefined;
  


  constructor(private usuarioService: UsuarioService) { };

  ngOnInit(): void {
    this.GetAll();
  }

  GetAll() {
    this.usuarioService.getAll().subscribe(
      data => {
        this.usuarios = data.objects;
        console.log(data)
      }, error => {

      }
    );
  }

  cambioStatus(event :Event){
    const switchStatus = event.target as HTMLSelectElement;
    
  }


     Delete(idusuario : any){
       this.usuarioService.DeleteUsuario(idusuario).subscribe(
         data =>{
           this.usuarios = data.objects;
           console.log(data);
         }, error =>{}
       )
     }


}
       