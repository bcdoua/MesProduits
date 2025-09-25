import { Routes } from '@angular/router';
import { ProduitsComponent } from './produits/produits';
import { AddProduitComponent } from './produits/add-produit/add-produit';

export const routes: Routes = [
    {path: "produits", component : ProduitsComponent},
    {path: "add-produit", component : AddProduitComponent},
    {path: "", redirectTo: "produits", pathMatch: "full"}
];
