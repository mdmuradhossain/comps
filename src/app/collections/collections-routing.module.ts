import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';
import { BiographyComponent } from '../collections/biography/biography.component';
import { CompaniesComponent } from '../collections/companies/companies.component';
import { PartnersComponent } from '../collections/partners/partners.component';

const routes: Routes = [
  {
    path: '',
    component: CollectionsHomeComponent,
    children: [
      {
        path: '',
        component: BiographyComponent,
      },
      {
        path: 'companies',
        component: CompaniesComponent,
      },
      {
        path: 'partners',
        component: PartnersComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollectionsRoutingModule {}
