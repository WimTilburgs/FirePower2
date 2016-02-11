System.register(['./stamgegevens/trainingsmethodes.controller', 'angular', './stamgegevens/trainingsmethodes.module', 'angular-material', 'angular-material/angular-material.css!', 'app/assets/app.css!'], function(exports_1) {
    var trainingsmethodes_controller_1, angular, trainingsmethodes_module_1;
    return {
        setters:[
            function (trainingsmethodes_controller_1_1) {
                trainingsmethodes_controller_1 = trainingsmethodes_controller_1_1;
            },
            function (angular_1) {
                angular = angular_1;
            },
            function (trainingsmethodes_module_1_1) {
                trainingsmethodes_module_1 = trainingsmethodes_module_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {}],
        execute: function() {
            //let modules = [ 'ng', 'ngAnimate', 'ngAria', 'ngMaterial' ]
            angular.module("app", ['ngMaterial', trainingsmethodes_module_1.default])
                .controller('TrainingsMethodesController', trainingsmethodes_controller_1.TrainingsMethodesController);
            // .config(function($mdThemingProvider) {
            //   $mdThemingProvider.theme('default')
            //     .dark();});
            angular.element(document).ready(function () {
                angular.bootstrap(document, ["app"]);
            });
        }
    }
});
//# sourceMappingURL=app.js.map