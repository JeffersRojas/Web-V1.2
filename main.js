$(document).ready(function() {
    // Cambia entre Iniciar Sesión y Registrarse
    $('.contenedor-tabs li a').on('click', function(event) {
        event.preventDefault();
        
        var tab_id = $(this).attr('href');

        $('.contenedor-tabs li').removeClass('active');
        $('.contenido-tab > div').hide();

        $(this).parent().addClass('active');
        $(tab_id).fadeIn();
    });

    // Mostrar y ocultar submenús
    $('nav li').hover(function() {
        $(this).find('.submenu').slideDown(200);
    }, function() {
        $(this).find('.submenu').slideUp(200);
    });

    // Mostrar formulario de Iniciar Sesión al cargar la página
    $('#iniciar-sesion').show();
});

