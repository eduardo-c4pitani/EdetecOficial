import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobsComponent } from './jobs/jobs.component';
import { LandingComponent } from './landing/landing.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  { path: 'inicio', component: LandingComponent },

  { path: 'contatos', component: ContactsComponent },

  { path: 'obras', component: JobsComponent },
  {
    path: '**',
    pathMatch: 'full',
    component: LandingComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
