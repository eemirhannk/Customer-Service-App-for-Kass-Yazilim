import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  @Input() isSidebarVisible : any

  constructor(private router : Router) {}

  goToMenu() {
    this.router.navigate(['menu/']);
  
  }
  goToKantar() {
    this.router.navigate(['kantar/']);
    
  }
  goToSantiye() {
    this.router.navigate(['santiye/']);
    
  }
  goToCari() {
    this.router.navigate(['cari-ekstre/']);
    
  }
  goToBeton() {
    this.router.navigate(['beton/']);
    
  }
}


