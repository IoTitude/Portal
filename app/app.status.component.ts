import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';

@Component({
    selector: 'status-component',
    templateUrl: 'app/templates/status.html',
    directives: [
      CardComponent
    ]
})

export class StatusComponent { }
