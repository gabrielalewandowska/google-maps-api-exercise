var initialize = function(){
  var mapDiv = document.getElementById("main-map");
  var vienna = {lat: 48.208174, lng: 16.373819};
  var chicago = {lat: 41.878114, lng: -87.629798};
  var mainMap = new MapWrapper(mapDiv, vienna, 10);

  var marker = mainMap.addMarker(vienna);

  mainMap.addClickEvent();
  var bounceButton = document.getElementById("button-bounce-markers");

  bounceButton.addEventListener("click", mainMap.bounceMarkers.bind(mainMap));

 var chicagoButton = document.getElementById('button-take-to-chicago');
 chicagoButton.addEventListener("click", function(){
   mainMap = new MapWrapper(mapDiv, chicago, 10);
   mainMap.addClickEvent();
   bounceButton.addEventListener("click", mainMap.bounceMarkers.bind(mainMap));
 });

 var whereAmIButton = document.getElementById("button-where-am-i");
 whereAmIButton.addEventListener("click", function(){
   navigator.geolocation.getCurrentPosition(function(position) {
     var pos = {lat: position.coords.latitude, lng: position.coords.longitude};
     mainMap = new MapWrapper(mapDiv, pos, 10);
     mainMap.addClickEvent();
     bounceButton.addEventListener("click", mainMap.bounceMarkers.bind(mainMap));
});
 })

}



window.addEventListener("load", initialize);
