import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'ngx-lottie/lib/symbols';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.scss'],
})
export class AboutSectionComponent implements OnInit {
  public readonly dataOptions: AnimationOptions;
  public readonly messageOptions: AnimationOptions;
  public readonly styles: Partial<CSSStyleDeclaration> = {
    minWidth: '130px',
    maxWidth: '300px',
    margin: '0 auto',
  };

  constructor() {
    this.dataOptions = {
      path: '/assets/animations/data-anim.json',
    };

    this.messageOptions = {
      path: '/assets/animations/message-anim.json',
    };
  }

  ngOnInit(): void {}
}
