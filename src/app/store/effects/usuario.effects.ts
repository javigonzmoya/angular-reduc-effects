import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as usuariosActions from '../actions';
import { UsuarioService } from '../../services/usuario.service';
import { User } from 'src/app/models/User.model';
import { of } from 'rxjs'; //crea observable

@Injectable({
  providedIn: 'root',
})
export class UsuarioEffects {
  constructor(
    private actions$: Actions,
    private usuarioService: UsuarioService
  ) {}

  loadUsuario$ = createEffect(() =>
    this.actions$.pipe(
      ofType(usuariosActions.cargarUsuario),
      mergeMap((action) =>
        this.usuarioService.getUserById(action.id).pipe(
          map((usuario: User) =>
            usuariosActions.cargarUsuarioSuccess({ usuario })
          ),
          catchError((error) =>
            of(usuariosActions.cargarUsuarioError({ payload: error }))
          )
        )
      )
    )
  );
}
