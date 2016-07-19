/*
 * Status view component
 *
 * Controls the general view of service statuses.
 */

import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'status-component',
  templateUrl: 'app/templates/status.html',
  directives: [
    CardComponent
  ]
})

export class StatusComponent {
  services = SERVICES;

}

export class Service {
  name: string;
}

const SERVICES: Service[] = [
  { name: 'Kaa' },
  { name: 'Cassandra' },
  { name: 'BaasBox' },
  { name: 'Mitänäitänyton' }
];
