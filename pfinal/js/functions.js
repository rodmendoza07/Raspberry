$(document).ready(function () {
    var that = this;
    this.state;
    $('.cube-switch .switch').click(function() {
        if ($('.cube-switch').hasClass('active')) {
            $('.cube-switch').removeClass('active');
            $('#light-bulb2').css({'opacity': '0'});
            var ajaxF = $.ajax({
                type: 'GET',
                url: 'include/callpython.php',
                data: {option: 0},
                contentType: 'application/json; charset=utf-8',
                beforeSend: function(){
                    console.log("Apagando dispositivo");
                },
                success: function(res) {
                    console.log(res);
                }
            });
        } else {
            $('.cube-switch').addClass('active');
            $('#light-bulb2').css({'opacity': '1'});
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