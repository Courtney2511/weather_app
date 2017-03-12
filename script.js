$(document).ready(function() {

  var farenheit = "";
  var celsius = ""


  if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(function(position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;

        $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&units=metric&APPID=d1df01200c747f524de64c3144b17224", function(json) {
            weather = json;
            celsius = Math.floor(weather.main.temp)
            $("#city").html(weather.name + ", " + weather.sys.country);
            $("#unit").text(celsius + ' C');
            $("#main").html(weather['weather']['0'].description);
            var iconId = weather['weather']['0'].id
            $('.icon').addClass('wi wi-owm-' + iconId);

            farenheit = (celsius * (9/5)) + 32

        }).done(function(){
          $('#unit').click(function(){
            $('#unit').text($(this).text() == celsius + ' C' ? farenheit + ' F' : celsius + ' C');
          });
        });
      });
    }
});
