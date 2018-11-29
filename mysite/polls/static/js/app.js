var estudiantes = [];

$(document).ready(function(){
    $('.menu li:has(ul)').click(function(e){
        e.preventDefault();

        if ($(this).hasClass('activado')){
            $(this).removeClass('activado');
            $(this).children('ul').slideUp();
        } else {
            $('.menu li ul').slideUp();
            $('.menu li').removeClass('activado');
            $(this).addClass('activado');
            $(this).children('ul').slideDown();
        }
    });

    $('.btn-menu').click(function() {
        $('.container-menu .menu').slideToggle();
    });

    $(window).resize(function(){
        if($(document).width() > 450){
            $('.container-menu .menu').css({'display' : 'block'});
        }

        if($(document).width() < 450){
            $('.container-menu .menu').css({'display' : 'none'});
            $('.menu li ul').slideUp();
            $('.menu li').removeClass('activado');
        }
    });

    $('.category_item').click(function() {
        var catProduct = $(this).attr('category');
        console.log(catProduct);

        //Ocultando productos---
        $('.product-item').hide();

        //Mostrando productos---
        $('.product-item[category="'+catProduct+'"]').show(); //filtro de los productos
    });

    $('.category_item[category="all"]').click(function() { //filtro de inicio
        $('.product-item').show();
    });

    $('.menu .mapa_item').click(function(){
                            alert('entroovhdcckjsbdl');

                            var map, infoWindow;

                    function initMap(){
                        map = new google.maps.Map(document.getElementById('map'), {
                            zoom:17,
                            center:{lat:-34.397, lng:150.644}

                        
                            
                        });
                        }

                    infoWindow = new google.maps.InfoWindow;
                    if(navigator.geolocation){
                        navigator.geolocation.getCurrentPosition(function(position){
                            var pos = {
                                lat: position.coords.latitude,
                                lng: position.coords.longitude
                            };
                            infoWindow.setPosition(pos);
                            infoWindow.setContent('Yo');
                            infoWindow.open(map);
                            map.setCenter(pos);
                        }, function(){
                            handleLocationError(true, infoWindow, map.getCenter());
                        });
                    } else {
                        handleLocationError(false, infoWindow, map.getCenter());
                        }
                    }

        function handleLocationError(browserHasGeolocation, infoWindow, pos) {
            infoWindow.setPosition(pos);
            infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
            infoWindow.open(map);
        }

        $('.container-menu .mapa').show();
    })
});

