import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-santiyeler',
  templateUrl: './santiyeler.component.html',
  styleUrls: ['./santiyeler.component.css']
})
export class SantiyelerComponent implements OnInit{


  constructor(private location: Location, private router : Router) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  isSidebarVisible: boolean = true;

  onSidebarToggled() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }

  goBack() {
    this.location.back();
  }

  refreshPage(){
    window.location.reload()
  }
  
  goToMenu() {
    this.router.navigate(['menu/']);
  
  }
  goToBeton() {
    this.router.navigate(['beton/']);
    
  }
  goToCari() {
    this.router.navigate(['cari-ekstre/']);
    
  }
  goToKantar() {
    this.router.navigate(['kantar/']);
    
  }
}
