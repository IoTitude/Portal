/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {

  // map tells the System loader where to look for things
  var map = {
    'app':                        'app', // 'dist',

    '@angular':                   'node_modules/@angular',
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
    'rxjs':                       'node_modules/rxjs',
    'ng2-table':                  'node_modules/ng2-table',
    'ng2-bootstrap':              'node_modules/ng2-bootstrap',
    'moment':                     'node_modules/moment',
    '@angular2-material':         'node_modules/@angular2-material'
  };

  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.js',  defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' },
    'ng2-table':                  { main: 'ng2-table.js', defaultExtension: 'js' },
    'ng2-bootstrap':              { main: 'ng2-bootstrap.js', defaultExtension: 'js' },
    'moment':                     { main: 'moment.js', defaultExtension: 'js' },
    '@angular2-material-card':    { main: 'card.js', defaultExtension: 'js' },
    '@angular2-material-button':  { main: 'button.js', defaultExtension: 'js' }
  };

  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade'
  ];

  // Define material packages to add
  var materialPkgs = [
    'button',
    'card',
    'core'
  ];

  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }

  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/'+pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  }

  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;

  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);

  // Add package entries for material packages
  materialPkgs.forEach((pkg) => {
    packages[`@angular2-material/${pkg}`] = {main: `${pkg}.js`};
  });

  // No umd for router yet
  packages['@angular/router'] = { main: 'index.js', defaultExtension: 'js' };

  var config = {
    map: map,
    packages: packages
  };

  System.config(config);

})(this);
