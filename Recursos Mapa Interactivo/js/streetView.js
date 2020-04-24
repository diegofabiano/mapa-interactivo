streetViewModulo = (function () {
  var paronama // 'Visor' de StreetView

  function inicializar () {
    var panoDiv=document.getElementById('pano');
    new google.maps.StreetViewPanorama(panoDiv,panorama);
        /* Completar la función inicializar()  que crea un panorama
        en una posición y lo muestra en la página. */
  }

  // Actualiza la ubicación del Panorama
  function fijarStreetView (ubicacion) {
      panorama={position:ubicacion};
       inicializar();
        /* Completar la función fijarStreetView que actualiza la posición
         de la variable panorama y cambia el mapa de modo tal que se vea
         el streetView de la posición actual. */
  }

  return {
    inicializar,
    fijarStreetView
  }
})()
