/*
 * Component for creating status cards of the various services linked to the portal
 */

import { Component, Input } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

@Component({
  selector: 'card-component',
  // Enable relative paths
  moduleId: module.id,
  templateUrl: 'card.html',
  styleUrls: [ 'card.css' ]
})
export class CardComponent {
  @Input() service: any;
  @Input() serviceimages: any;
 }
