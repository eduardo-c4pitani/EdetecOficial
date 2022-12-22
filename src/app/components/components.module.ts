
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { CardModule } from 'primeng/card';
import { PresentationSectionComponent } from './presentation-section/presentation-section.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { PanelModule } from 'primeng/panel';
import { LottieAnimationViewModule } from 'ng-lottie';
import { LottieModule } from 'ngx-lottie';
import { FeatureSectionComponent } from './feature-section/feature-section.component';
import { InformationSectionComponent } from './information-section/information-section.component';
import { FooterComponent } from './footer/footer.component';
import { ContactsSectionComponent } from './contacts-section/contacts-section.component';
import { MenubarModule } from 'primeng/menubar';
import { JobsSectionComponent } from './jobs-section/jobs-section.component';
import { GalleriaComponent } from './galleria/galleria.component';
import { GalleriaModule } from 'primeng/galleria'



export const playerFactory = (): any => {
  return import('lottie-web');
};

@NgModule({
  declarations: [
    HeaderComponent,
    PresentationSectionComponent,
    AboutSectionComponent,
    InformationSectionComponent,
    FeatureSectionComponent,
    FooterComponent,
    ContactsSectionComponent,
    JobsSectionComponent,
    GalleriaComponent
  ],
  imports: [
    CommonModule,
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    LottieAnimationViewModule,
    LottieModule.forRoot({ player: playerFactory }),
    CardModule,
    TabViewModule,
    PanelModule,
    MenubarModule,
    GalleriaModule,

  ],
  exports: [
    HeaderComponent,
    PresentationSectionComponent,
    AboutSectionComponent,
    InformationSectionComponent,
    FeatureSectionComponent,
    FooterComponent,
    ContactsSectionComponent,
    JobsSectionComponent,
    GalleriaComponent
  ],
})
export class ComponentsModule { }
