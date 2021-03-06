function initMap() {
        var laboratoriaLima = {lat: -12.1191427, lng: -77.0349046};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 18,
          center: laboratoriaLima
        });
        var markadorLaboratoria = new google.maps.Marker({
          position: laboratoriaLima,
          map: map
        });



function buscar(){
  if (navigator.geolocation)
  {
    navigator.geolocation.getCurrentPosition(funcionExito, funcionError)
  }
}
//funcion exito
var latitud,longitud;
var funcionExito = function(posicion)
{
  latitud = posicion.coords.latitude;
  longitud = posicion.coords.longitude;
}

var miUbicacion = new google.maps.Marker({
  position:{lat:latitud, lng:longitud},
  map:map
})

map.setZoom(18);
          map.setCenter({lat:latitud,lng:longitud});

var funcionError = function(error){
  alert("Tenemos un problema con encontrar tu ubicacion");
  document.getElementById("encuentrame").addEventListener("click",buscar);
}
}
initMap() ;


/**/
var inputPartida = document.getElementById("punto-partida");
var inputDestino = document.getElementById("punto-destino");

new google.maps.places.Autocomplete(inputPartida);
new google.maps.places.Autocomplete(inputDestino);
var directionsService = new google.maps.DirectionsService;
var directionsDisplay = new google.maps.DirectionsRenderer;

var calculateAndDisplayRoute = function(DirectionsService, directionsDisplay)
{
  directionsService.route({
    origin: inputPartida.value,
    destination: inputDestino.value,
    travelMode:'DRIVING'
  }, function(response, status){
    if (status === 'OK') {
      directionsDisplay.setDirection(response);
    } else {
      window.alert("No encontramos una ruta.");
    }
  })
}
directionsDisplay.setMap(map);
var trazarRuta = function() {
  calculateAndDisplayRoute(directionsService, directionsDisplay);
};
document.getElementById("trazar-Ruta").addEventListener("click",trazarRuta);