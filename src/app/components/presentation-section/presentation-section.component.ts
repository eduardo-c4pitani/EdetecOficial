import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-presentation-section',
  templateUrl: './presentation-section.component.html',
  styleUrls: ['./presentation-section.component.scss'],
})
export class PresentationSectionComponent implements OnInit {
  private readonly presentationText = `
  A Edetec sistemas elétricos é uma empresa voltada para o desenvolvimento de soluções inovadoras para instalação elétrica e automação do setor agroindustrial. A Edetec se preocupa com a excelência tecnológica, qualidade de seus produtos em total comprometimento com o cliente. Fundada em 2009, a Edetec busca desenvolver constantemente novas tecnologias, ferramentas e equipamentos para o setor de armazenagem e processamento de grãos, a fim de garantir a satisfação de seus clientes.
  `;
  constructor() { }

  ngOnInit(): void { }

  showModal(): void {
    Swal.fire(this.presentationText);
  }
}
