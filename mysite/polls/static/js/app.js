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


    $('#buscador').click(function() {

        var precioProd = $('.product-item').attr("precio");
        var catProduct = $('.nombre');
        var buscando = $('#precio').val();
        var item='';
        var price='';
        for (var i=0;i<catProduct.length;i++)
        {
            price = precioProd[i].toLowerCase();
            item = $(catProduct[i]).html().toLowerCase();
            //alert(item);
                if(buscando.length==0 || item.indexOf(buscando)>-1 )
                {
                    $(catProduct[i]).parents('.product-item').show();
                }else
                {
                    $(catProduct[i]).parents('.product-item').hide();
                }

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

    $('.map').click(function(){
        $('.container .map').show();
    })
});

