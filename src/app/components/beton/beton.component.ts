import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-beton',
  templateUrl: './beton.component.html',
  styleUrls: ['./beton.component.css']
})
export class BetonComponent implements OnInit {

  constructor(private location: Location,private router : Router,private dialogRef : MatDialog) { }


  ngOnInit(): void {
    
  }

  filterText: string = '';

  applyFilter() {
    // Filtreleme işlemlerini burada gerçekleştirin
    // this.filterText değişkeni, filtreleme işlemi için kullanılan metni içerir
  }

  openDialog() {
    this.dialogRef.open(ModalComponent);
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
  goToKantar() {
    this.router.navigate(['kantar/']);
    
  }
  goToSantiye() {
    this.router.navigate(['santiye/']);
    
  }
  goToCari() {
    this.router.navigate(['cari-ekstre/']);
    
  }
}



