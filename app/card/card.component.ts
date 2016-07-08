import { Component } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

@Component({
  selector: 'card-component',
  // Enable relative paths
  moduleId: module.id,
  templateUrl: 'card.html',
  styleUrls: [ 'card.css' ]
})
export class CardComponent { }
