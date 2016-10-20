angular.module('app.controllers', [])

.controller('comunicadosCtrl', ['$scope', '$stateParams', '$firebaseArray', '$ionicLoading',
function ($scope, $stateParams, $firebaseArray, $ionicLoading) {
  var ref = new Firebase("https://transporte-tangua.firebaseio.com/");
  $scope.comunicados = $firebaseArray(ref.child('comunicados'));

  $ionicLoading.show({
    template: 'Carregando dados...'
  });

  $scope.comunicados.$loaded(
    function (x) {
      $ionicLoading.hide();
    }, function (err) {
      console.log(err);
    });
}])

.controller('NibusCtrl', ['$scope', '$stateParams', '$firebaseArray', '$ionicLoading',
function ($scope, $stateParams, $firebaseArray, $ionicLoading) {
  var ref = new Firebase("https://transporte-tangua.firebaseio.com/");
  $scope.buses = $firebaseArray(ref.child('onibus'));

  $ionicLoading.show({
    template: 'Carregando dados...'
  });

  $scope.buses.$loaded(
    function (x) {
      $ionicLoading.hide();
    }, function(err){
      console.log(err);
    });

}])

.controller("duvidasCtrl", function($scope){

})


.controller("representantesCtrl", function($scope, $firebaseArray){
  var ref = new Firebase("https://transporte-tangua.firebaseio.com/");
  $scope.representantes = $firebaseArray(ref.child('coordenacao').child('representantes'));
  $scope.coordenadores = $firebaseArray(ref.child('coordenacao').child('coordenadores'));
  console.log($scope.representantes);

})
