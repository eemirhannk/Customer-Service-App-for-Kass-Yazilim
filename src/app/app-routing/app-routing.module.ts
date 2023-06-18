import { LoginComponent } from './../components/login/login.component';
import { AdminComponent } from './../components/admin/admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from '../components/menu/menu.component';
import { BetonComponent } from '../components/beton/beton.component';
import { SantiyelerComponent } from '../components/santiyeler/santiyeler.component';
import { CariEkstreComponent } from '../components/cari-ekstre/cari-ekstre.component';
import { KantarComponent } from '../components/kantar/kantar.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'admin' , component : AdminComponent},
  { path: 'menu' , component : MenuComponent},
  { path: 'beton' , component : BetonComponent},
  { path: 'kantar' , component : KantarComponent},
  { path: 'cari-ekstre' , component : CariEkstreComponent},
  { path: 'santiye' , component : SantiyelerComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
