import { Component } from '@angular/core';
import { UsuarioComponent } from '../usuario-component/usuario-component';
import { UsuarioService } from '../../Service/usuario-services';


@Component({
  selector: 'app-get-by-id-component',
  imports: [],
  templateUrl: './get-by-id-component.html',
  styleUrl: './get-by-id-component.css',
})
export class GetByIdComponent extends UsuarioComponent{

  // constructor(usuarioService : UsuarioService){
  //   super();
  //   console.log()
  // }
}
