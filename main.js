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
    
    // Manejar el login
    $('#login-form').on('submit', function(event) {
        event.preventDefault();

        const username = $('#username').val();
        const password = $('#password').val();

        if (username === 'admin' && password === 'admin') {
            $('#iniciar-sesion').hide();
            $('.contenedor-tabs li a').hide(); // Ocultar el formulario de inicio de sesión
            $('#menu').fadeIn();  // Mostrar el menú

            // Mostrar el formulario de vehículos por defecto al iniciar sesión
            $('#vehiculos-form').fadeIn();
        } else {
            alert('Usuario o contraseña incorrecta');
        }
    });

    // Manejar la selección de formularios
    $('nav a[data-form]').on('click', function(event) {
        event.preventDefault();
        const formToShow = $(this).data('form');

        $('.formulario').hide();  // Oculta todos los formularios
        $('#' + formToShow).fadeIn();  // Muestra el formulario seleccionado
    });

    // Manejar la opción de salir
    $('#logout').on('click', function(event) {
        event.preventDefault();

        $('#menu').hide();  // Ocultar el menú
        $('.formulario').hide();  // Ocultar cualquier formulario visible
        $('#iniciar-sesion').show();
        $('.contenedor-tabs li a').show();  // Mostrar el formulario de inicio de sesión
    });
});

