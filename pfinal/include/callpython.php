<?php
    $option = $_GET['option'];
    
    switch($option) {
        case '1': 
            $encendido = 'sudo python /var/www/html/Raspberry/pfinal/include/encendido.py';
            exec($encendido);
            echo "prendido";
            break;
        case '0':
            $apagado = 'sudo python /var/www/html/Raspberry/pfinal/include/apagado.py';
            exec($apagado);
            echo "apagado";
            break;
        default:
            echo "Opción no valida";
    }

    
?>
