import RPi.GPIO as GPIO
from time import sleep
GPIO.setwarnings(False)
GPIO.setmode(GPIO.BCM) #GPIO.BCM o GPIO.BOARD
GPIO.setup(4, GPIO.OUT) #El pin GPIO4 se configura como salida
                        #Si se quiere configurar como entrada se coloca GPIO.setup(4, GPIO.IN)
def encendido():        #Se declara una funcion con cero argumentos
    GPIO.output(4, True) #El pin se enciende cuando el segundo argumento es True, si se desea apagar se pone False
    #print("pin 4 encendido")

encendido()
