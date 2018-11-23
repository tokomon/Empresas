function initMap()
{
	const ubicacion = new Localizacion(()=>{
		const options = {
			center: {
				lat: ubicacion.latitude,
				lng: ubicacion.longitude
			},

			zoom: 16 //el valor puede cambiar
		}

		var map = document.getElementById('map');
		const mapa = new google.maps.Map(map, options);
	});
}