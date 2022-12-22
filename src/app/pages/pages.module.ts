import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LandingComponent } from './landing/landing.component';
import { ComponentsModule } from '../components/components.module';
import { JobsComponent } from './jobs/jobs.component';
import { ContactsComponent } from './contacts/contacts.component';



@NgModule({
  declarations: [LandingComponent, JobsComponent, ContactsComponent],
  imports: [CommonModule, PagesRoutingModule, ComponentsModule],
})
export class PagesModule {}
