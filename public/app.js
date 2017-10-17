var initialize = function(){
  var mapDiv = document.getElementById("main-map");
  var center = {lat: 51.10773, lng: 17.03533};
  var center1 = {lat: 48.208174, lng: 16.373819};
  var center2 = {lat: -37.810880, lng: 175.776461};
  var mainMap = new MapWrapper(mapDiv, center, 1);
  mainMap.addMarker(center);
  mainMap.addMarker(center1);
  mainMap.addMarker(center2);
  mainMap.addClickEvent();
  var bounceButton = document.getElementById("button-bounce-markers");
  bounceButton.addEventListener("click", mainMap.bounceMarkers.bind(mainMap));

}



window.addEventListener("load", initialize);
