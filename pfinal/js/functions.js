$(document).ready(function () {
    var that = this;
    this.state;
    /**Bloque para apagar y encender el relevador */
    $('.cube-switch .switch').click(function() {
        /**Agado del relevador */
        if ($('.cube-switch').hasClass('active')) {
            $('.cube-switch').removeClass('active');
            $('#light-bulb2').css({'opacity': '0'});
            /**Funcion Ajax para la ejecucion del php que a su vez ejecuta los scripts de python. */
            var ajaxF = $.ajax({
                type: 'GET',
                url: 'include/callpython.php',
                data: {option: 0},
                contentType: 'application/json; charset=utf-8',
                async: false,
                beforeSend: function(){
                    console.log("Apagando dispositivo");
                },
                success: function(res) {
                    console.log(res);
                }
            });
        } else { /**Encendido del relevador */
            $('.cube-switch').addClass('active');
            $('#light-bulb2').css({'opacity': '1'});
            /**Funcion Ajax para la ejecucion del php que a su vez ejecuta los scripts de python. */            
            var ajaxF = $.ajax({
                type: 'GET',
                url: 'include/callpython.php',
                data: {option: 1},
                contentType: 'application/json; charset=utf-8',
                async: false,
                beforeSend: function(){
                    console.log("Prendiendo dispositivo");
                },
                success: function(res) {
                    console.log(res);
                }
            });
        }
    });
});