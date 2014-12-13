(function () {

    // AngularJS Stuff
    var app = angular.module('app', [
        'ngRoute', 'ngAnimate']);

    app.controller('AgendaController', function ($scope, $http) {
    });
    app.controller('spaController', function ($scope, $location) {
        $scope.classic = true;
        $scope.animate = function () {
            if ($scope.classic) {
                $scope.classic = false;
            }
            else {
                $location.path("/api");
            }
        }
    });

    app.config(function ($routeProvider) {
        $routeProvider
        .when('/startpage', {
            templateUrl: 'directives/startpage.html'
        })
        .when('/presenters', {
            templateUrl: 'directives/presenters.html'
        })
        .when('/startpage-repeat', {
            templateUrl: 'directives/startpage-repeat.html'
        })
        .when('/spa', {
            templateUrl: 'directives/spa.html',
            controller: 'spaController'
        })
        .when('/api', {
            templateUrl: 'directives/api.html'
        })
        .when('/Komplettpaket', {
            templateUrl: 'directives/Komplettpaket.html'
        })
        .when('/Zusammenspiel_mit_anderen_Bibliotheken', {
            templateUrl: 'directives/Zusammenspiel_mit_anderen_Bibliotheken.html'
        })
        .when('/Vorbedingungen', {
            templateUrl: 'directives/Vorbedingungen.html'
        })
        .when('/letscode', {
            templateUrl: 'directives/letscode.html'
        })
        .when('/Weiterfuehrende_Lektuere', {
            templateUrl: 'directives/Weiterfuehrende_Lektuere.html'
        })
        .when('/Ende', {
            templateUrl: 'directives/Ende.html'
        })
        .otherwise({
            redirectTo: '/startpage'
        });
    });
})();


