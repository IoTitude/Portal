/*
 * KamuList component
 *
 * Displays all available KaMUs for further interaction.
 */

import {Component, OnInit} from '@angular/core';
import {CORE_DIRECTIVES, NgClass, NgIf} from '@angular/common';
import {PAGINATION_DIRECTIVES} from 'ng2-bootstrap';
import {NG_TABLE_DIRECTIVES}    from 'ng2-table';
import { FORM_DIRECTIVES } from '@angular/forms';
import { KamuService } from './services/kamu.service';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'kamu-list-component',
    templateUrl: 'app/templates/kamulist.html',
    directives: [
      ROUTER_DIRECTIVES,
      NgClass,
      KamuListComponent,
      NG_TABLE_DIRECTIVES,
      PAGINATION_DIRECTIVES,
      NgIf,
      CORE_DIRECTIVES,
      FORM_DIRECTIVES
    ]
})
export class KamuListComponent {

  kamus: any[] = [];
  public rows:Array<any> = [];
  public columns:Array<any> = [
    {title: 'Name', name: 'mac'},
    {title: 'Enabled', name: 'enabled', sort: false},
    {title: 'Version', name: 'swVersion', sort: 'asc'},
    {title: 'Profile(s)', name: 'activeProfiles', sort: ''}
  ];

  /*
      ng2-table
  */
  public page:number = 1;
  public itemsPerPage:number = 10;
  public maxSize:number = 5;
  public numPages:number = 1;
  public length:number = 0;

  public config:any = {
    paging: true,
    sorting: {columns: this.columns},
    filtering: {filterString: '', columnName: 'enabled'}
  };

  private data:Array<any> = this.kamuService.kamus;

  public constructor(private kamuService: KamuService) {
    this.kamus = kamuService.kamus;
    if (!this.data.length) {
      this.length = 0
    } else {
      this.length = this.data.length;
    }
  }

  public ngOnInit():void {
    this.onChangeTable(this.config);
    this.kamuService.update();
  }

  // Pagination page change
  public changePage(page:any, data:Array<any> = this.data):Array<any> {
    console.log(page);
    let start = (page.page - 1) * page.itemsPerPage;
    let end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
    return data.slice(start, end);
  }

  // Table sort
  public changeSort(data:any, config:any):any {
    if (!config.sorting) {
      return data;
    }

    let columns = this.config.sorting.columns || [];
    let columnName:string = void 0;
    let sort:string = void 0;

    for (let i = 0; i < columns.length; i++) {
      if (columns[i].sort !== '') {
        columnName = columns[i].name;
        sort = columns[i].sort;
      }
    }

    if (!columnName) {
      return data;
    }

    // simple sorting
    return data.sort((previous:any, current:any) => {
      if (previous[columnName] > current[columnName]) {
        return sort === 'desc' ? -1 : 1;
      } else if (previous[columnName] < current[columnName]) {
        return sort === 'asc' ? -1 : 1;
      }
      return 0;
    });
    }

  // Filer update
  public changeFilter(data:any, config:any):any {
    if (!config.filtering) {
      return data;
    }

    let filteredData:Array<any> = data.filter((item:any) =>
      item[config.filtering.columnName].match(this.config.filtering.filterString));

    return filteredData;
  }

  // Change table view
  public onChangeTable(config:any, page:any = {page: this.page, itemsPerPage: this.itemsPerPage}):any {
    if (config.filtering) {
      Object.assign(this.config.filtering, config.filtering);
    }
    if (config.sorting) {
      Object.assign(this.config.sorting, config.sorting);
    }

    let filteredData = this.changeFilter(this.data, this.config);
    let sortedData = this.changeSort(filteredData, this.config);
    this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
    this.length = sortedData.length;
  }
}
