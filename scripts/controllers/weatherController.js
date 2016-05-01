app.controller('weatherController', function($scope, $http) {
  $scope.cards = [];

  $scope.init = function () {
    $http.get("data.json")
      .then(function(response) {
          $scope.latestTemperature = response.data[response.data.length - 1].temperature;
          $scope.latestHumidity = response.data[response.data.length - 1].humidity;

          $scope.cards.push({
            "title": "Temperature",
            "lines" : [
              {
                "value" : $scope.latestTemperature,
                "unit" : "°C"
              }
            ]
          });

          $scope.cards.push({
            "title": "Humidity",
            "lines" : [
              {
                "value" : $scope.latestHumidity,
                "unit" : "%"
              }
            ]
          });

          $scope.latestHumidity = response.data[response.data.length - 1].humidity;
      });
  }

  $scope.init();
});
