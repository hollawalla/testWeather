document.body.classList.add("bg");
//document.body.style.backgroundImage = "url('http://images.freeimages.com/images/small-previews/9f2/mountain-lake-1555645.jpg')"

  if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    var lat =  position.coords.latitude;
    var lon = position.coords.longitude;
    var api = "//api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=imperial&APPID=23655e5aeeb671cbe5644fb927bbe1d0";

  $.getJSON(api, {format:'json'},function(data){
    $("#theTemp").html("<img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png' alt='Icon depicting current weather.'>"+Math.round(data.main.temp) + "<h2> &deg F</h2>");
    mytemp = Math.round(data.main.temp);
    myicon = data.weather[0].icon;
    if (mytemp < 40) {$(".bg").css("background-image","url(https://media.gettyimages.com/photos/aiguille-du-midi-viewing-platform-mont-blanc-chamonix-france-picture-id486828498?b=1&k=6&m=486828498&s=612x612&w=0&h=mKCQrzJCfMtRq3NT0m34I5mzioILylJm_DxAvaHDQHs=)");};
    if (mytemp > 90) {$(".bg").css("background-image","url(https://media.gettyimages.com/photos/monument-valley-picture-id173659157?b=1&k=6&m=173659157&s=612x612&w=0&h=5dl0sJxq5TsCCbKW06gUvjHbNvMsxScg6ak_YX_OfVQ=)")};
  });
    
  });  
    
 }
var i=0
$("#myBtn").click(function(){
  i++;
  var newTemp = mytemp;
  if (i%2 == 0) { newTemp = mytemp;
     $("#theTemp").html("<img src='http://openweathermap.org/img/w/" + myicon + ".png' alt='Icon depicting current weather.'>"+mytemp+ "<h2> &deg F</h2>");
    $("#myBtn").html("Convert to Celsius");           
                } else {
    newTemp = Math.round((newTemp -32)*(5/9));
    $("#theTemp").html("<img src='http://openweathermap.org/img/w/" + myicon + ".png' alt='Icon depicting current weather.'>"+newTemp+ "<h2> &deg C</h2>");
    $("#myBtn").html("Convert to Fahrenheit");
  };
  console.log(i + " " + newTemp);
})
