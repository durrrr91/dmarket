import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateIcoComponent } from './create-ico/create-ico.component';
import { ListingsComponent } from './listings/listings.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create-ico', component: CreateIcoComponent },
  { path: 'market-listings', component: ListingsComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
