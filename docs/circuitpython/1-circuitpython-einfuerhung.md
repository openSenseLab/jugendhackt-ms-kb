---
sidebar_position: 1
sidebar_label: 1. CircuitPython Einführung
---

# CircuitPython Einführung

Die senseBox MCU-S2 und viele weitere CircuitPython kompatible Microconctroller haben integrierte RGB-Neopixel-LED. Mit CircuitPython kannst du die Farben der LED ganz einfach ändern.

## Blinken der LED

```python
# senseBox MCU-S2 CircuitPython Example Code
# Simple code to blink the internal RGB-LED
import time
import board
import neopixel

# Configure the setup
PIXEL_PIN = board.NEOPIXEL  # pin that the NeoPixel is connected to | GPIO 1
ORDER = neopixel.GRB  # pixel color order
COLOR = (0, 255, 0)  # color to blink
CLEAR = (0, 0, 0)  # color to disable the LED
DELAY = 0.25  # blink rate in seconds

# Create the NeoPixel object
pixel = neopixel.NeoPixel(PIXEL_PIN, 1, brightness=0.1, pixel_order=ORDER)

# Loop forever and blink the color
while True:
    print("Hello senseBox")
    pixel[0] = COLOR
    time.sleep(DELAY)
    pixel[0] = CLEAR
    time.sleep(DELAY)
```

> Erklärung:
`pixel = neopixel.NeoPixel(PIXEL_PIN, 1, brightness=0.1, pixel_order=ORDER)` initialisiert die integrierte Neopixel-LED (1 Pixel).
In der Schleife `while True` wird die LED durch setzten der Farbe ein und ausgeschaltet.

## Verändern der Farbe nach jedem Durchlauf

```python
import time
import board
import neopixel

# Configure the setup
PIXEL_PIN = board.NEOPIXEL  # pin that the NeoPixel is connected to | GPIO 1
ORDER = neopixel.GRB  # pixel color order
COLORS = [(255, 0, 0), (0, 255, 0), (0, 0, 255)]  # list of colors to cycle through (Red, Green, Blue)
CLEAR = (0, 0, 0)  # color to disable the LED
DELAY = 1  # delay in seconds

# Create the NeoPixel object
pixel = neopixel.NeoPixel(PIXEL_PIN, 1, brightness=0.1, pixel_order=ORDER)

# Loop forever and cycle through the colors
while True:
    for COLOR in COLORS:
        print("Changing color to:", COLOR)
        pixel[0] = COLOR
        time.sleep(DELAY)
        pixel[0] = CLEAR
        time.sleep(DELAY)

```
