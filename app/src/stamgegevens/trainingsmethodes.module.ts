import {TrainingsMethodesController} from './trainingsmethodes.controller';

let moduleName =
angular.module("trainingsMethodes",[])
.controller('TrainingsMethodesController ', TrainingsMethodesController  ).name;

export default moduleName;