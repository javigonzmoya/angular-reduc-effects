import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/User.model';
import { cargarUsuarios } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [],
})
export class ListComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  usuarios: User[] = [];
  loading: boolean = true;
  error: any;

  ngOnInit(): void {
    this.store.select('usuarios').subscribe(({ usuarios, loading, error }) => {
      this.usuarios = usuarios;
      this.loading = loading;
      this.error = error;
    });
    this.store.dispatch(cargarUsuarios());
  }
}
