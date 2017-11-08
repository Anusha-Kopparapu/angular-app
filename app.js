var app = angular.module('myApp', []);


    //Factory and services
    app.factory('MathService', function() {
            var factory = {};
            
            factory.multiply = function(a, b) {
               return a * b
            }
            return factory;
         });
         
         app.service('CalcService', function(MathService){
            this.square = function(a) {
               return MathService.multiply(a,a);
            }
         });

// custom directives
app.directive("ownDirective", function() {
    return {
        template : "<h3>Made by a directive!</h3>"
    };
});

//controller
app.controller('myCtrl', function($scope,CalcService,$q,$http) {
    $scope.firstName= "Anusha";
    $scope.lastName= "K";

    $scope.names=['Anu','Divya','yogeesh','satish','singh'];

    $scope.square = function() {
               $scope.result = CalcService.square($scope.number);
            }

            //Promises 
            $scope.fail =false;
           $scope.test = function() {
 
             var deferred = $q.defer();

             var promise =deferred.promise;
             promise.then(function(result){
                alert('Sucess:' + result);
             },function(reason){
                alert('Error:' + reason);
            });
             if($scope.fail)
                deferred.reject('sorry');
            else
                deferred.resolve('cool');
           };

//CRUD operations
$scope.get = function() { 
$http({
    method: 'GET',
    url: 'http://10.132.33.164:8086/Getbird'
  }).then(function successCallback(response) {
        console.log("Entered in successCallback ");
        // console.log(JSON.stringify(response.data));
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.statusText);
        $scope.birdsapi = response.data;

    }, function errorCallback(response) {
        console.log("Entered in errorCallback ");
        console.log(response.xhrStatus);
        console.log(response.status);
        console.log(response.statusText);
});   
        };
// $scope.put = function() {
//           var data = {
//             name:$scope.name,
//             family:$scope.family,
//             continents:$scope.continents

//           };
// // $http({
// //     method: 'PUT',
// //     url: 'http://10.132.33.166:1337/testAPI/',
// //     data:'data',
// //   }).then(function successCallback(response) {
// //         console.log("Entered in successCallback ");
// //         console.log(JSON.stringify(response.data));
// //         console.log(response.status);
// //         console.log(response.statusText);
// //         console.log(response.statusText);
// //         $scope.birdsapi.push(data);
// //         alert('Sucess');

// //     }, function errorCallback(response) {
// //         console.log("Entered in errorCallback ");
// //         console.log(response.xhrStatus);
// //         console.log(response.status);
// //         console.log(response.statusText);
// // });   
// //         };
        $scope.post = function() {
          var payload = {
            idd:"1",//$scope.idd,
            name:"Anusha",//$scope.name,
            family:"Faction Family",//$scope.family,
            continents:"ASIA",//$scope.continents,
            added:"Yes",//$scope.added,
            visible:"Always"//$scope.visible
          };
          // var data1=JSON.stringify(data);

$http({
    method: 'POST',
   // url: 'http://10.132.33.164:8086/Postbird',
    url: 'http://localhost:8086/Postbird',
    data:payload,
    headers:{'Content-Type': 'application/json'},
  }).then(function successCallback(response) {
        console.log("Entered in successCallback ");
        console.log(JSON.stringify(response.data));
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.statusText);
        //$scope.birdsapi = response.data;
        alert('Success');

    // }, function errorCallback(response) {
    //     console.log("Entered in errorCallback ");
    //     console.log(response.xhrStatus);
    //     console.log(response.status);
    //     console.log(response.statusText);
});   
        };
//  $scope.delete = function() {
// $http({
//     method: 'delete',
//     url: 'http://10.132.33.166:8086/DeleteBird'
//   }).then(function successCallback(response) {
//         console.log("Entered in successCallback ");
//         // console.log(JSON.stringify(response.data));
//         console.log(response.status);
//         console.log(response.statusText);
//         console.log(response.statusText);

//     }, function errorCallback(response) {
//         console.log("Entered in errorCallback ");
//         console.log(response.xhrStatus);
//         console.log(response.status);
//         console.log(response.statusText);
// });   
//         };       
        });


       