import { createReducer, on } from '@ngrx/store';
import {
  cargarUsuarios,
  cargarUsuariosError,
  cargarUsuariosSuccess,
} from '../actions';
import { User } from '../../models/User.model';

export interface UsuariosState {
  usuarios: User[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const usuariosInitialState: UsuariosState = {
  usuarios: [],
  loaded: false,
  loading: true,
  error: null,
};

const _usuariosReducer = createReducer(
  usuariosInitialState,

  on(cargarUsuarios, (state) => ({ ...state, loading: true })),
  on(cargarUsuariosSuccess, (state, { usuarios }) => ({
    ...state,
    loading: false,
    loaded: true,
    usuarios: [...usuarios],
  })),
  on(cargarUsuariosError, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: {
      message: payload.message,
      url: payload.url,
    },
  }))
);

export function usuariosReducer(state, action) {
  return _usuariosReducer(state, action);
}
