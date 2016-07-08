# Portal service

## Setup

Install Node.js v6:

```shell
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs
```

Clone this repo.

Run `npm install` inside the project folder.

Start with `npm start`




## How to install ng2-tables to Angular2 app

Our Angular2 app uses routes to navigate to different pages so you need to know basics of routing in Angular2 to use this manual

**If you clone this repository you have everything needed**,  
but if you are adding ng2-tables to your own app here are all setups to get it running.

Checkout packages.json from this wiki for our setup and dependencies
To get this working you need to have installed

* Angular2...  
* ng2-bootstrap ```npm install --save ng2-bootstrap```  
* ng2-table ```npm i ng2-table --save```  
* moment ```npm install moment --save``` one that is supplied with angular 2 is not working as it should be)  

You need to add some mapping and packages to systemjs.config.js so Angular2 will find required files

Add ng2-table, ng2-bootstrap and moment to map and packages


```
//systemjs.config.js
var map = {
    'app':                        'app', // 'dist',

    '@angular':                   'node_modules/@angular',
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
    'rxjs':                       'node_modules/rxjs',
    'ng2-table':                  'node_modules/ng2-table',       //add this
    'ng2-bootstrap':              'node_modules/ng2-bootstrap',   //add this
    'moment':                     'node_modules/moment',          //and this
  };

var packages = {
  'app':                        { main: 'main.js',  defaultExtension: 'js' },
  'rxjs':                       { defaultExtension: 'js' },
  'ng2-table': { main: 'ng2-table.js', defaultExtension: 'js' },          //add this
  'ng2-bootstrap': { main: 'ng2-bootstrap.js', defaultExtension: 'js' },  //add this
  'moment': { main: 'moment.js', defaultExtension: 'js' },                //and this
};
```


first go to your grid app component (in our case ./app/app.kamulist.component.ts)
Add following imports
```
//app.kamulist.component.ts
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass, NgIf} from '@angular/common';
import {PAGINATION_DIRECTIVES} from 'ng2-bootstrap';
import {NG_TABLE_DIRECTIVES}    from 'ng2-table';
import {TableData} from './data/table-data'; //this is data storage for demo use
```

also add these to @Component directives

  ```
  //app.kamulist.component.ts
  directives: [
  NgClass,
  NG_TABLE_DIRECTIVES,
  PAGINATION_DIRECTIVES,
  NgIf,
  CORE_DIRECTIVES,
  FORM_DIRECTIVES
  ]
  ```

We have laid our template to seperate html file, which can be found in ./app/templates/kamulist.html

## angular/material2

[Getting started](https://github.com/angular/material2/blob/2.0.0-alpha.6/GETTING_STARTED.md)
