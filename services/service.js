angular.module('shortly.services', [])
  .factory('Zipcode', function ($http) {

    var weather = function (zip) {
      var url = 'http://api.openweathermap.org/data/2.5/weather?zip=' + zip + ",us&units=imperial&APPID=17eb98bcc45e3ed62fcfbd6581d04ad1";

      return $http({
        method: 'GET',
        url: url,
      })
      .then(function (data) {
        return data;
      });
    }

    var formatData = function (data) {
      var weatherData = {};

      weatherData.city = data.data.name;
      weatherData.weather = data.data.weather[0].description;
      weatherData.temp = data.data.main.temp;

      return weatherData;
    }

    var weatherString = function (data) {
    
      return data.city + ', ' +  data.weather + ' with a temperature of ' + data.temp + ' ' +
        '- '+ tempFeel(data.temp); 

    }

    //used internally by weather string function
    var tempFeel = function (temp) {
      temp = Number(temp);
      console.log(temp);
      if (75 < temp) { return 'It\'s Hot'; }
      if (60 < temp && temp < 75) { return 'It\'s Warm'; }
      if (45 < temp && temp < 65) { return 'It\'s Mild'; }
      if (45 > temp) { return 'Brrrr'; }
      if (32 > temp) { return 'It\'s freezing!' }
    }

    return {
      weather: weather,
      format: formatData,
      stringify: weatherString,
    }

  })