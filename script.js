$( document ).ready(function() {
    
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    
    envelope.click( function() {
        open();
    });
    btn_open.click( function() {
        open();
    });
    btn_reset.click( function() {
        close();
    });

    function open() {
        envelope.addClass("open")
           .removeClass("close");
           $(".letter").append("<div class='words'>BUENOS DIASS TE QUIERO MUCHO ANA CECILIA</div>"); // Agrega esta línea
    }
    function close() {
        envelope.addClass("close")
           .removeClass("open");
           $(".letter .words:contains('BUENOS DIASS TE QUIERO MUCHO ANA CECILIA')").remove(); // Limpia el mensaje al cerrar
    }
   
});