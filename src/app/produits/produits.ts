import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produits',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produits.html',
  
})
export class ProduitsComponent implements OnInit  {
  produits : string[]; //un tableau de chînes de caractères

  constructor() {
    this.produits = ["PC Asus", "Imprimante Epson", "Tablette Samsung"];
   }
  
   ngOnInit() {
     }


}
