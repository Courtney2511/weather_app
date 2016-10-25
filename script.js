$(document).ready(function() {

  var latitude = "";
  var longitude = "";
  var weather

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
      console.log(latitude);
      console.log(longitude);

        $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&APPID=d1df01200c747f524de64c3144b17224", function(json) {
            weather = json;
            // console.log(weather);
            $("#city").html(weather.name);
            $("#temperature").html(weather.main.temp);
        });
    }, function(error) {
      console.log(error);
    });
  }








});
