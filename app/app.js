'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
  'ngRoute',
  'ui.grid',
  'ui.bootstrap',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]);

var data = [
       {'id': 1,
       'brand': "Average Andy's Coffee",
       'name': 'Regular Coffee',
       'country': 'Denmark',
       'reviews': [
               {'rating': 3,
               'comment': "Could've been crispier",
               'reviewer': "Chris P. Bacon"
               }
       ]
       },
       {'id': 2,
       'brand': "Jimmy's Coffee",
       'name': 'Mocha',
       'country': 'America',
       'reviews': [
       {'rating': 10,
       'comment': 'What everyone should drink in the morning!',
       'reviewer': 'Earl Lee Riser'
       },
       {'rating': 10,
       'comment': 'A genius of everything coffee',
       'reviewer': 'Bob'
       }
       ]
       },
       {'id': 3,
       'brand': "We Did Our Best",
       'name': 'Latte',
       'country': 'France',
       'reviews': [
       {'rating': 1,
       'comment': " a 'latte' yuckiness.",
       'reviewer': 'Tim Burr'
       },
       {'rating': 1,
       'comment': 'Is this even coffee?',
       'reviewer': 'Sue Flay'
       },
        {'rating': 1,
       'comment': 'The grossest thing I have ever had.',
       'reviewer': 'Myles Long'
       },
        {'rating': 5,
       'comment': 'I dont know what the fuss is about, i dont think its too bad!',
       'reviewer': 'Sara Bellum'
       }
       ]
       },
       {'id': 4,
       'brand': "Jimmy's Special Coffee",
       'name': 'Americano',
       'country': 'America',
       'reviews': [
       {'rating': 10,
       'comment': 'If I could rate it higher, I would!',
       'reviewer': 'Justin Case'
       },
       {'rating': 10,
       'comment': 'He does it again!',
       'reviewer': 'Eileen Dover'
       }
       ]
       }];


myApp.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.
	when('/coffees', {
		templateUrl: 'coffees.html',
		controller: 'CoffeeCtrl'
	}).
	when('/reviews/:coffeeId', {
		templateUrl: 'reviews.html',
		controller: 'ReviewCtrl'
	}).
	otherwise({redirectTo: '/coffees'});


}]);
myApp.controller('ReviewCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {
	$scope.coffeeId = $routeParams.coffeeId;
	$scope.coffees = data[$scope.coffeeId-1];
	$scope.gridOptions = {enableFiltering: true, columnDefs: [ {field: 'reviewer'},{field: 'comment'}, {field:'rating'}]};
        $scope.gridOptions.data = data[$scope.coffeeId-1]['reviews'];
}]);
myApp.controller('CoffeeCtrl', function($scope) {
	$scope.coffees = data;
	$scope.gridOptions = {enableFiltering: true, columnDefs: [ {field: 'reviews', cellTemplate: "<a href='/#!/reviews/{{row.entity.id}}'>Reviews</a>"},{field: 'brand', displayName: 'Brand'}, {field:'name', displayName: "Coffee Title"}, {field: 'country'}]};
	$scope.gridOptions.data = data;
	});
myApp.controller('Carousel', CarouselCtrl);

function CarouselCtrl($scope) {
	$scope.active = 0;
	$scope.noWrapSlides = false;
	var currIndex = 0;
	var slides = $scope.slides = [{image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/275px-A_small_cup_of_coffee.JPG', id: 0}, {image: 'https://cdn.authoritynutrition.com/wp-content/uploads/2013/01/cup-of-coffee.jpg', id: 1}];

}
