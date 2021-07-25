import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as usuariosActions from '../actions/usuarios.actions';
import { UsuarioService } from '../../services/usuario.service';
import { User } from 'src/app/models/User.model';
import { of } from 'rxjs'; //crea observable

@Injectable({
  providedIn: 'root',
})
export class UsuariosEffects {
  constructor(
    private actions$: Actions,
    private usuarioService: UsuarioService
  ) {}

  loadUsuarios$ = createEffect(() =>
    this.actions$.pipe(
      ofType(usuariosActions.cargarUsuarios),
      mergeMap(() =>
        this.usuarioService.getUsers().pipe(
          map((usuarios: User[]) =>
            usuariosActions.cargarUsuariosSuccess({ usuarios })
          ),
          catchError((error) =>
            of(usuariosActions.cargarUsuariosError({ payload: error }))
          )
        )
      )
    )
  );
}
