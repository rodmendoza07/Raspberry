import time
import wiringpi2

io = wiringpi2.GPIO(wiringpi2.GPIO.WPI_MODE_PINS)

io.pinMode(7,io.OUTPUT)

for x in range (0,3) :
    io.digitalWrite(7,io.HIGH)
    time.sleep(0.5)
    io.digitalWrite(7,io.LOW)
    time.sleep(0.5)

