import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  ngOnInit(): void {
    
    
  }
  constructor(private router : Router) {}
  buttons: string[] = ['Button 1', 'Button 2', 'Button 3', 'Button 4'];


  goSantiye() {
    this.router.navigate(['santiye/']);
  }
  goCari() {
    this.router.navigate(['cari-ekstre/']);
  }
  goBeton(){
    this.router.navigate(['beton/']);
  } 
  goKart(){
    this.router.navigate(['kantar/']);
  }
}
