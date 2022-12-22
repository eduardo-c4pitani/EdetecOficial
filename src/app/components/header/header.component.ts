import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() {

  }

  ngOnInit() {
    this.items = [
      {
        label: 'Contatos', routerLink: '/contatos'
      },
      {
        label: 'Obras', routerLink: '/obras'
      }
    ];
  }

  delete() {
    throw new Error('Method not implemented.');
  }
  update() {
    throw new Error('Method not implemented.');
  }
}
