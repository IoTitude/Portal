import { Component } from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from '@angular/common'; //vaihda forms tulemaan angular/forms
import { BUTTON_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap'
import { MD_TABS_DIRECTIVES } from '@angular2-material/tabs';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { ActivatedRoute } from '@angular/router';
import { BaasBoxService } from './services/baasbox.service';
import { KamuService, Kamu } from './services/kamu.service';
//import { SELECT_DIRECTIVES } from './app.ng2-select';



@Component({
    selector: 'kamu-component',
    templateUrl: 'app/templates/kamu.html',
    directives: [
      MD_TABS_DIRECTIVES,
      MD_BUTTON_DIRECTIVES,
      //SELECT_DIRECTIVES,
      NgClass,
      CORE_DIRECTIVES,
      FORM_DIRECTIVES,
      BUTTON_DIRECTIVES
    ],
    providers: [ BaasBoxService ],
    properties: [
      'allowClear',
      'placeholder',
      'items',
      'multiple',
      'showSearchInputInDropdown']
})
export class KamuItemComponent {

  kamu: Kamu

  constructor (private baasBoxService: BaasBoxService, private kamuService: KamuService, private route: ActivatedRoute) {
    route.params.subscribe(params => {
      this.kamu = kamuService.getKamu(params['id'])
    })
  }

  updateKamu() {
    console.log("update KaMU")
  }

  deleteKamu() {
    console.log("delete KaMU")
  }

  profileKamu() {
    console.log("profile KaMU")
  }

}

export class MultipleDemoComponent {
  public items:Array<string> = ['Amsterdam', 'Antwerp', 'Athens', 'Barcelona',
    'Berlin', 'Birmingham', 'Bradford', 'Bremen', 'Brussels', 'Bucharest',
    'Budapest', 'Cologne', 'Copenhagen', 'Dortmund', 'Dresden', 'Dublin', 'Düsseldorf',
    'Essen', 'Frankfurt', 'Genoa', 'Glasgow', 'Gothenburg', 'Hamburg', 'Hannover',
    'Helsinki', 'Leeds', 'Leipzig', 'Lisbon', 'Łódź', 'London', 'Kraków', 'Madrid',
    'Málaga', 'Manchester', 'Marseille', 'Milan', 'Munich', 'Naples', 'Palermo',
    'Paris', 'Poznań', 'Prague', 'Riga', 'Rome', 'Rotterdam', 'Seville', 'Sheffield',
    'Sofia', 'Stockholm', 'Stuttgart', 'The Hague', 'Turin', 'Valencia', 'Vienna',
    'Vilnius', 'Warsaw', 'Wrocław', 'Zagreb', 'Zaragoza'];

  private value:any = ['Athens'];
  private _disabledV:string = '0';
  private disabled:boolean = false;

  private get disabledV():string {
    return this._disabledV;
  }

  private set disabledV(value:string) {
    this._disabledV = value;
    this.disabled = this._disabledV === '1';
  }

  public selected(value:any):void {
    console.log('Selected value is: ', value);
  }

  public removed(value:any):void {
    console.log('Removed value is: ', value);
  }

  public refreshValue(value:any):void {
    this.value = value;
  }

  public itemsToString(value:Array<any> = []):string {
    return value
      .map((item:any) => {
      return item.text;
    }).join(',');
  }
}
