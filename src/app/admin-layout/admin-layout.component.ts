import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent {
  isSidebarVisible: boolean = true;
  
  onSidebarToggled() {
    console.log(this.isSidebarVisible)
    this.isSidebarVisible = !this.isSidebarVisible;
  }
}
