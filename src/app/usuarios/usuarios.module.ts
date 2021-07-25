import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { UsuarioComponent } from './usuario/usuario.component';

@NgModule({
  declarations: [ListComponent, UsuarioComponent],
  imports: [CommonModule],
  exports: [ListComponent, UsuarioComponent],
})
export class UsuariosModule {}
