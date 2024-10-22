---
sidebar_position: 3
sidebar_label: 2. Retro Spiele mit CircuitPython    
---

# Retro Spiele mit CircuitPython

Mit CircuitPython kannst du auch einfache Spiele programmieren. Diese können mit dem Display oder einer LED Matrix und einem einfachen Controller umgesetzt werden.

## Ansteuern der LED Matrix

Die LED Matrix hat 12x8 Pixel und kann mit CircuitPython einfach angesteuert werden. Hier ein einfaches Beispiel, wie du die LED Matrix mit CircuitPython ansteuern kannst:


```python
import time
import board
import neopixel
import digitalio

# IO Enable
io_enable_pin = digitalio.DigitalInOut(board.IO_POWER)
io_enable_pin.direction = digitalio.Direction.OUTPUT
io_enable_pin.value = False

# Configure the setup
PIXEL_PIN = board.D2  # pin that the NeoPixel is connected to | GPIO 1
ORDER = neopixel.GRB  # pixel color order
COLORS = [(255, 0, 0), (0, 255, 0), (0, 0, 255), (255,34,200), (0,50,50)]  # list of colors to cycle through (Red, Green, Blue)
CLEAR = (0, 0, 0)  # color to disable the LED
DELAY = 0.05  # delay in seconds

# Create the NeoPixel object
pixel = neopixel.NeoPixel(PIXEL_PIN, 96, brightness=0.3, pixel_order=ORDER)

# Loop forever and cycle through the colors
while True:
    for i in range(96):
        pixel[i] = COLORS[1]
        time.sleep(DELAY)
        #pixel[i] = CLEAR
        #time.sleep(DELAY)
    for j in range(96):
        pixel[(95-j)] = CLEAR
        time.sleep(DELAY)

```

## Der Controller

Um ein Spiel zu steuern, benötigst du einen einfachen Controller. Dieser kann z.B. aus einem Joystick und ein paar Buttons bestehen. Hier ein Beispiel, wie du den Joystick und die Buttons auslesen kannst. Die einfachste Variante ist das Adafruit I2C Mini Gamepad. Welches einen Joystick und insgesamt 6 Buttons hat.

Der Anschluss erfolgt über QWIIC und du kannst das Gamepad einfach an den I2C Port anschließen. Hier ein Beispiel, wie du das Gamepad auslesen kannst:
Kopiere die Bibliothek `adafruit_seesaw` in den `lib` Ordner auf deinem Board.

```python

# SPDX-FileCopyrightText: 2021 ladyada for Adafruit Industries
# SPDX-FileCopyrightText: 2023 Kattni Rembor for Adafruit Industries

# SPDX-License-Identifier: MIT

import time
import board
from micropython import const
from adafruit_seesaw.seesaw import Seesaw

BUTTON_X = const(6)
BUTTON_Y = const(2)
BUTTON_A = const(5)
BUTTON_B = const(1)
BUTTON_SELECT = const(0)
BUTTON_START = const(16)
button_mask = const(
    (1 << BUTTON_X)
    | (1 << BUTTON_Y)
    | (1 << BUTTON_A)
    | (1 << BUTTON_B)
    | (1 << BUTTON_SELECT)
    | (1 << BUTTON_START)
)

i2c_bus = board.I2C()  # The built-in STEMMA QT connector on the microcontroller board.

seesaw = Seesaw(i2c_bus, addr=0x50)

seesaw.pin_mode_bulk(button_mask, seesaw.INPUT_PULLUP)

last_x = 0
last_y = 0

while True:
    x = 1023 - seesaw.analog_read(14)
    y = 1023 - seesaw.analog_read(15)

    if (abs(x - last_x) > 3) or (abs(y - last_y) > 3):
        print(x, y)
        last_x = x
        last_y = y

    buttons = seesaw.digital_read_bulk(button_mask)

    if not buttons & (1 << BUTTON_X):
        print("Button x pressed")

    if not buttons & (1 << BUTTON_Y):
        print("Button Y pressed")

    if not buttons & (1 << BUTTON_A):
        print("Button A pressed")

    if not buttons & (1 << BUTTON_B):
        print("Button B pressed")

    if not buttons & (1 << BUTTON_SELECT):
        print("Button Select pressed")

    if not buttons & (1 << BUTTON_START):
        print("Button Start pressed")

    time.sleep(0.01)

```
