<?php
    $option = $_GET['option']; //Recoge el parámetro de la url
    
    switch($option) {
        /**Bloque de codigo que se ejecuta en caso que se quiera prender el relevador */
        case '1': 
            $encendido = 'sudo python /var/www/html/Raspberry/pfinal/include/encendido.py';
            exec($encendido);
            echo "Prendido";
            break;
            /**Bloque de codigo que se ejecuta en caso que se quiera apagar el relevador */
        case '0':
            $apagado = 'sudo python /var/www/html/Raspberry/pfinal/include/apagado.py';
            exec($apagado);
            echo "Apagado";
            break;
        default:
            echo "Opción no valida";
    }
?>