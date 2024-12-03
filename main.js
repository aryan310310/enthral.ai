// Define the AngularJS app
var app = angular.module('userApp', []);

// Define the controller
app.controller('UserController', function($scope) {
  // Initialize the list of users
  $scope.users = [
    { name: 'SAmeer' },
    { name: 'Jain' },
    { name: 'Smith' }
  ];

  // Initialize the new user input
  $scope.newUser = { name: '' };

  // Function to add a new user to the list
  $scope.addUser = function() {
    if ($scope.newUser.name.trim() !== '') {
      $scope.users.push({ name: $scope.newUser.name.trim() });
      $scope.newUser.name = ''; // Clear the input field
    }
  };
});
