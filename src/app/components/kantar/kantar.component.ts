import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-kantar',
  templateUrl: './kantar.component.html',
  styleUrls: ['./kantar.component.css']
})
export class KantarComponent implements OnInit{

  constructor (private location: Location,private router : Router) {}
  ngOnInit(): void {
    
  }
  filterText: string = '';

applyFilter() {
  // Filtreleme işlemlerini burada gerçekleştirin
  // this.filterText değişkeni, filtreleme işlemi için kullanılan metni içerir
}

refreshPage(){
  window.location.reload()
}

goBack() {
  this.location.back();
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
goToCari() {
  this.router.navigate(['cari-ekstre/']);
  
}



}
