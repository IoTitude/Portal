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
  image: string;
  status: string;
}

const SERVICES: Service[] = [
  { name: 'Kaa', image: 'images/kaa.png', status: 'UP' },
  { name: 'Cassandra', image: 'images/cassandra.png', status: 'DOWN' },
  { name: 'BaasBox', image: 'images/baasbox.jpg', status: 'UP' },
  { name: 'Mitänäitänyton', image: 'images/hemuli.png', status: 'DOWN' }
];
