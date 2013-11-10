angular.module( 'ngHarpBoilerplate.about', [
  'ui.state',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'about', {
    url: '/about',
    views: {
      "main": {
        controller: 'AboutCtrl',
        templateUrl: 'app/about/about.html'
      }
    },
    data:{ pageTitle: 'What is It?' }
  });
})

.controller( 'AboutCtrl', function AboutCtrl( $scope ) {
  // This is simple a demo for UI Boostrap.
  $scope.dropdownDemoItems = [
    "The first choice!",
    "And another choice for you.",
    "but wait! A third!"
  ];
})

;
