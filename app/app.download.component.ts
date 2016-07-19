/*
 * Download component
 *
 * This component provides the Download view.
 */

import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

const YEARS: string[] = [
  "2013",
  "2014",
  "2015",
  "2016"
]

const MONTHS: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
]

@Component({
  templateUrl: 'app/templates/download.html',
  directives: [ NgFor ]
})
export class DownloadComponent {
  years: string[] = YEARS
  months: string[] = MONTHS
}
