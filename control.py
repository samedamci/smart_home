#!/usr/bin/env python3

import time
from datetime import datetime

import RPi.GPIO as GPIO

GPIO.setmode(GPIO.BCM)
GPIO.setup(17, GPIO.OUT)
GPIO.setup(18, GPIO.IN)
GPIO.output(17, 0)

def hour(d):
    return d.hour


while True:
    h = hour(datetime.now())

    if h == 24:
        inp = GPIO.input(18)

        if inp == 1: 
            GPIO.output(17, 1)
            time.sleep(10)
            GPIO.output(17, 0)

    if h == 5:
        GPIO.output(17, 0)
