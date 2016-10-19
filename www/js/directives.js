angular.module('app.directives', [])

.factory("FirebaseRef", function(){
    var ref = new Firebase("https://transporte-tangua.firebaseio.com/");
    return ref;
})

.directive('blankDirective', [function(){

}]);