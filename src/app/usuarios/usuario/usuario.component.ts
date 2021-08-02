import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/User.model';
import { cargarUsuario } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: [],
})
export class UsuarioComponent implements OnInit {
  constructor(private router: ActivatedRoute, private store: Store<AppState>) {}

  usuario: User;

  ngOnInit(): void {
    this.store.select('usuario').subscribe(({ usuario }) => {
      this.usuario = usuario;
    });

    this.router.params.subscribe(({ id }) => {
      this.store.dispatch(cargarUsuario({ id }));
    });
  }
}
