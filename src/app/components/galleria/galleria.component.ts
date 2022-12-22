import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-galleria',
  templateUrl: './galleria.component.html',
  styleUrls: ['./galleria.component.scss']
})
export class GalleriaComponent implements OnInit {

  images: any[] = [
    {
      "previewImageSrc": "assets/images/edetecLogo.png",
      "thumbnailImageSrc": "assets/images/edetecLogo.png",
      "alt": "Description for Image 1",
      "title": "Title 1"
    },
    {
      "previewImageSrc": "assets/images/instalacoes.png",
      "thumbnailImageSrc": "assets/images/instalacoes.png", 
      "alt": "Description for Image 2",
      "title": "Title 2"
    }
  ];

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

  constructor() { }

  ngOnInit() {
  }
}
