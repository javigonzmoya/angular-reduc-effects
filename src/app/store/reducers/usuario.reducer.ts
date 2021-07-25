import { createReducer, on } from '@ngrx/store';
import {
  cargarUsuario,
  cargarUsuarioError,
  cargarUsuarioSuccess,
} from '../actions';
import { User } from '../../models/User.model';

export interface UsuarioState {
  id: string;
  usuario: User;
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const usuarioInitialState: UsuarioState = {
  id: null,
  usuario: null,
  loaded: false,
  loading: true,
  error: null,
};

const _usuarioReducer = createReducer(
  usuarioInitialState,

  on(cargarUsuario, (state, { id }) => ({ ...state, id, loading: true })),
  on(cargarUsuarioSuccess, (state, { usuario }) => ({
    ...state,
    loading: false,
    loaded: true,
    usuario: { ...usuario },
  })),
  on(cargarUsuarioError, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: {
      message: payload.message,
      url: payload.url,
    },
  }))
);

export function usuarioReducer(state, action) {
  return _usuarioReducer(state, action);
}
