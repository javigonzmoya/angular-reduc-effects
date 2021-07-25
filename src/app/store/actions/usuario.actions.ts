import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/User.model';

export const cargarUsuario = createAction(
  '[Usuario] cargar Usuario',
  props<{ id: string }>()
);

export const cargarUsuarioSuccess = createAction(
  '[Usuario] cargar Usuario Success',
  props<{ usuario: User }>()
);

export const cargarUsuarioError = createAction(
  '[Usuario] cargar Usuario Error',
  props<{ payload: any }>()
);
