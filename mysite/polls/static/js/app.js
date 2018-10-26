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
});

function estudiante(n,pt,ph){
  this.nombre=n;
  this.puntosTecnicos=pt;
  this.puntosHSE=ph;

}

function obtenerListaEstudiantes() {
    // TO DO: Retornar la lista de estudiantes
    return (estudiantes);


}

function agregarEstudiante() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado



    var nom=prompt("Ingrese su Nombre: ");
    var ptec=prompt("Ingrese el Porcentaje Tecnico de Alumna: ");
    var phse=prompt("Ingrese el Porcentaje de las habilidades Socioemocionales: ");
    var e=  new  estudiante(nom,ptec,phse);

    estudiantes.push(e);


    return e;
}

function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiante.nombre + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.puntosTecnicos + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.puntosHSE + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
}

function mostrarLista(estudiantes) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes
    return estudiantes.map(function(x) {
   return mostrar(x);
});
}

function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS

    for (m in estudiantes) {
      if (estudiantes[m].nombre.toLowerCase()==nombre.toLowerCase()) {
        return estudiantes[m];

      }
    }

}

function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor
  return  estudiantes.sort(function(a, b){
    return b.puntosTecnicos - a.puntosTecnicos
  });

}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor
    return  estudiantes.sort(function(a, b){
      return b.puntosHSE - a.puntosHSE
    });
}
