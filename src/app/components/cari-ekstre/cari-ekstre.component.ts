import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cari-ekstre',
  templateUrl: './cari-ekstre.component.html',
  styleUrls: ['./cari-ekstre.component.css']
})
export class CariEkstreComponent implements OnInit {
  constructor(private location: Location,private router : Router) { }

  ngOnInit(): void {
    
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
  goToSantiye() {
    this.router.navigate(['santiye/']);
    
  }
  goToKantar() {
    this.router.navigate(['kantar/']);
    
  }
}
