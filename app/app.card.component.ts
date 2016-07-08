import {Component, ViewEncapsulation, Input} from '@angular/core';
import {CONST_EXPR, Type} from '@angular/common/src/facade/lang';

@Component({
  selector: 'md-card',
  template: `
    <div class="md-card">
	    <ng-content></ng-content>
    </div>
  `,
  encapsulation: ViewEncapsulation.None
})
export class MdCard {
}

@Component({
  selector: 'md-card-header',
  template: `
    <ng-content select="[md-card-avatar]"></ng-content>
    <div class="md-card-header-text">
      <ng-content select="md-card-title"></ng-content>
      <ng-content select="md-card-subtitle"></ng-content>
    </div>
    <ng-content></ng-content>
  `,
  encapsulation: ViewEncapsulation.None
})
export class MdCardHeader {
}

@Component({
  selector: 'md-card-title-group',
  template: `
    <div>
      <ng-content select="md-card-title"></ng-content>
      <ng-content select="md-card-subtitle"></ng-content>
    </div>
    <ng-content select="img"></ng-content>
    <ng-content></ng-content>
  `,
  encapsulation: ViewEncapsulation.None
})
export class MdCardTitleGroup {
}

export const MD_CARD_DIRECTIVES: Type[] =
    CONST_EXPR([MdCard, MdCardHeader, MdCardTitleGroup]);


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
