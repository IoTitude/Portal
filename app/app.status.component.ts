import { Component } from '@angular/core';
import {MD_CARD_DIRECTIVES} from '@angular2-material-card';
import {MdButton} from '@angular2-material-button';

@Component({
    selector: 'status-component',
    templateUrl: 'app/templates/status.html',
    directives: [MD_CARD_DIRECTIVES, MdButton]
})

export class StatusComponent { }
