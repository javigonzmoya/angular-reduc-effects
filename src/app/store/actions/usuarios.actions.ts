import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/User.model';

export const cargarUsuarios = createAction('[Usuarios] cargar Usuarios');

export const cargarUsuariosSuccess = createAction(
  '[Usuarios] cargar Usuarios Success',
  props<{ usuarios: User[] }>()
);

export const cargarUsuariosError = createAction(
  '[Usuarios] cargar Usuarios Error',
  props<{ payload: any }>()
);
