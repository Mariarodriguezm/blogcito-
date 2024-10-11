import { Component } from '@angular/core';
import { HeaderData, HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  private uiData: HeaderData = {
    title: 'Sobre nosotros',
    subtitle: 'Nuestro Foro de Ingles!',
    thumbnail: 'https://contactomaestro.colombiaaprende.edu.co/sites/default/files/maestrospublic/styles/interna_850x260/public/2020-11/Portada_english.jpeg'
  }

  constructor(private headerService: HeaderService) {
    headerService.uiData.set(this.uiData)
  }

}
