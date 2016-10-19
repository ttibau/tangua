angular.module('app.controllers', [])

.controller('comunicadosCtrl', ['$scope', '$stateParams', '$firebaseArray',
function ($scope, $stateParams, $firebaseArray) {
  var ref = new Firebase("https://transporte-tangua.firebaseio.com/");
  $scope.comunicados = $firebaseArray(ref.child('comunicados'));
  console.log($scope.comunicados);
}])

.controller('NibusCtrl', ['$scope', '$stateParams', '$firebaseArray',
function ($scope, $stateParams, $firebaseArray) {
  var ref = new Firebase("https://transporte-tangua.firebaseio.com/");
  $scope.buses = $firebaseArray(ref.child('onibus'));
  console.log($scope.buses);
}])

.controller("duvidasCtrl", function($scope){

})


.controller("representantesCtrl", function($scope, $firebaseArray){
  var ref = new Firebase("https://transporte-tangua.firebaseio.com/");
  $scope.representantes = $firebaseArray(ref.child('coordenacao').child('representantes'));
  $scope.coordenadores = $firebaseArray(ref.child('coordenacao').child('coordenadores'));
  console.log($scope.representantes);
})
