import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ConfigService } from './services/config.service';
import { CommonModule, DatePipe } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { SantiyelerComponent } from './components/santiyeler/santiyeler.component';
import { CariEkstreComponent } from './components/cari-ekstre/cari-ekstre.component';
import { BetonComponent } from './components/beton/beton.component';
import { KantarComponent } from './components/kantar/kantar.component';
import { MatIconModule } from '@angular/material/icon';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ModalComponent } from './components/modal/modal.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    LoginComponent,
    MenuComponent,
    SantiyelerComponent,
    CariEkstreComponent,
    BetonComponent,
    KantarComponent,
    SidebarComponent,
    NavbarComponent,
    ModalComponent,
    AdminLayoutComponent,
  ],
  imports: [
    BrowserModule,
    MatTabsModule,
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    DatePipe,
    FormsModule,
    MatDialogModule,
    RouterModule.forRoot([
      {
        path: '',
        component: LoginComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'admin',
        component: AdminComponent,
      },
      {
        path: 'menu',
        component: MenuComponent,
      },
      {
        path: 'beton',
        component: BetonComponent,
      },
      {
        path: 'cari-ekstre',
        component: CariEkstreComponent,
      },
      {
        path: 'kantar',
        component: KantarComponent,
      },
      {
        path: 'santiye',
        component: SantiyelerComponent,
      },
    ]),
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent],
  schemas: [],
})
export class AppModule {}
