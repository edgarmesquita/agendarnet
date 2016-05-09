angular.module('ionicApp', ['ionic', 'ngCookies'])

.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('signin', {
          url: '/sign-in',
          templateUrl: 'templates/sign-in.html',
          controller: 'SignInCtrl'
      })
      .state('forgotpassword', {
          url: '/forgot-password',
          templateUrl: 'templates/forgot-password.html'
      })
      .state('tabs', {
          url: '/tab',
          abstract: true,
          templateUrl: 'templates/tabs.html'
      })
      .state('tabs.home', {
          url: '/home',
          views: {
              'home-tab': {
                  templateUrl: 'templates/home.html',
                  controller: 'HomeTabCtrl'
              }
          }
      })
      .state('tabs.facts', {
          url: '/facts',
          views: {
              'home-tab': {
                  templateUrl: 'templates/facts.html'
              }
          }
      })
      .state('tabs.facts2', {
          url: '/facts2',
          views: {
              'home-tab': {
                  templateUrl: 'templates/facts2.html'
              }
          }
      })
      .state('tabs.about', {
          url: '/about',
          views: {
              'about-tab': {
                  templateUrl: 'templates/about.html'
              }
          }
      })
      .state('tabs.navstack', {
          url: '/navstack',
          views: {
              'about-tab': {
                  templateUrl: 'templates/nav-stack.html'
              }
          }
      })
      .state('tabs.contact', {
          url: '/contact',
          views: {
              'contact-tab': {
                  templateUrl: 'templates/contact.html'
              }
          }
      });


    $urlRouterProvider.otherwise('/sign-in');

})
    .service('sessionService', ['$cookieStore', function ($cookieStore) {
        var localStoreAvailable = typeof (Storage) !== "undefined";
        this.store = function (name, details) {
            if (localStoreAvailable) {
                if (angular.isUndefined(details)) {
                    details = null;
                } else if (angular.isObject(details) || angular.isArray(details) || angular.isNumber(+details || details)) {
                    details = angular.toJson(details);
                };
                sessionStorage.setItem(name, details);
            } else {
                $cookieStore.put(name, details);
            };
        };

        this.persist = function (name, details) {
            if (localStoreAvailable) {
                if (angular.isUndefined(details)) {
                    details = null;
                } else if (angular.isObject(details) || angular.isArray(details) || angular.isNumber(+details || details)) {
                    details = angular.toJson(details);
                };
                localStorage.setItem(name, details);
            } else {
                $cookieStore.put(name, details);
            }
        };

        this.get = function (name) {
            if (localStoreAvailable) {
                return getItem(name);
            } else {
                return $cookieStore.get(name);
            }
        };

        this.destroy = function (name) {
            if (localStoreAvailable) {
                localStorage.removeItem(name);
                sessionStorage.removeItem(name);
            } else {
                $cookieStore.remove(name);
            };
        };

        var getItem = function (name) {
            var data;
            var localData = localStorage.getItem(name);
            var sessionData = sessionStorage.getItem(name);

            if (sessionData) {
                data = sessionData;
            } else if (localData) {
                data = localData;
            } else {
                return null;
            }

            if (data === '[object Object]') { return null; };
            if (!data.length || data === 'null') { return null; };

            if (data.charAt(0) === "{" || data.charAt(0) === "[" || angular.isNumber(data)) {
                return angular.fromJson(data);
            };

            return data;
        };

        return this;
    }])
.controller('SignInCtrl', function ($scope, $state, $http) {

    var baseUri = "http://agendar.azurewebsites.net/api/";
    var nonceUri = baseUri + "get_nonce/?controller=user&method=generate_auth_cookie";

    $scope.signIn = function (user) {
        var url = baseUri + "user/generate_auth_cookie/?insecure=cool";
        

        $http({
            method: 'GET',
            url: nonceUri
        }).then(function loginSuccess(response) {

            console.log(response);

            var data = user;
            data.nonce = response.data.nonce;

            $http({
                method: 'GET',
                url: url,
                params: data
            }).then(function loginSuccess(response) {

                $state.go('tabs.home');
                console.log('Sign-In', user);

            }, function loginError(response) {

                console.log(response.data.error);
            });

        }, function loginError(response) {
            
        });

        
    };

})

.controller('HomeTabCtrl', function ($scope) {
    console.log('HomeTabCtrl');
});