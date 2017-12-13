<?php
	
ini_set('display_errors', 1);
error_reporting(E_ALL);    
echo 'hola py<br>';
$output = null;
$prende = 'sudo python /var/www/html/Raspberry/pfinal/include/apagado.py';
//var_dump($prende);
   exec($prende);
//phpinfo();
/*try{
php_info()}
catch(ex){
echo ex;
};*/
?>
