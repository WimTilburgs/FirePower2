System.register(['./trainingsmethodes.controller'], function(exports_1) {
    var trainingsmethodes_controller_1;
    var moduleName;
    return {
        setters:[
            function (trainingsmethodes_controller_1_1) {
                trainingsmethodes_controller_1 = trainingsmethodes_controller_1_1;
            }],
        execute: function() {
            moduleName = angular.module("trainingsMethodes", [])
                .controller('TrainingsMethodesController ', trainingsmethodes_controller_1.TrainingsMethodesController).name;
            exports_1("default",moduleName);
        }
    }
});
//# sourceMappingURL=trainingsmethodes.module.js.map