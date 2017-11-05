function todoApp() {
  return{
    restrict: 'E',
    controller: 'TodoController as todo',
    template:  ``


  };
}

angular
  .module('app')
  .directive('todoApp',todoApp);
