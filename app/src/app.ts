import {ApplicationController} from './app.controller';
import {TrainingsMethodesController} from './stamgegevens/trainingsmethodes.controller'
import * as angular from 'angular';
import trainingsMethodes from './stamgegevens/trainingsmethodes.module'

// import 'angular-aria';
// import 'angular-animate';
// import 'angular-bootstrap';
// import 'angular-loading-bar';
// import 'angular-material';
//import material from 'angular-material'

import 'angular-material'; 
import 'angular-material/angular-material.css!';
import 'app/assets/app.css!'
//let modules = [ 'ng', 'ngAnimate', 'ngAria', 'ngMaterial' ]
angular.module("app",['ngMaterial',trainingsMethodes])
.controller('TrainingsMethodesController', TrainingsMethodesController );
// .config(function($mdThemingProvider) {
//   $mdThemingProvider.theme('default')
//     .dark();});

angular.element(document).ready(()=> {
    angular.bootstrap(document,["app"]);
})