$(document).ready(function() {

  var latitude = "";
  var longitude = "";
  var weather

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;

        $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&units=metric&APPID=d1df01200c747f524de64c3144b17224", function(json) {
            weather = json;
            $("#city").html(weather.name + ", " + weather.sys.country);
            $("#temperature").html(weather.main.temp + " C");
            $("#main").html(weather['weather']['0'].description);
            var iconId = weather['weather']['0'].id
            console.log(iconId)
            $('.icon').addClass('wi wi-owm-' + iconId);
        });
    }, function(error) {
      console.log(error);
    });
  }









});
