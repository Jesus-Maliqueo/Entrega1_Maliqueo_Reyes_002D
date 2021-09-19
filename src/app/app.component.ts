import { Component } from '@angular/core';

interface Componente{
  icon: string;
  name: string;
  redirecTo: string;
}


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  componentes : Componente[] = [

    {
      icon: 'home-outline',
      name: 'inicio',
      redirecTo: '/inicio'
    },
    {
      icon: 'cafe-outline',
      name: 'visual',
      redirecTo: '/visual'
    },

    {
      icon: 'paw-outline',
      name: 'registro',
      redirecTo: '/registro'
    },

  ];

}
