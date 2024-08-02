---
sidebar_position: 4
sidebar_label: 2. Umrechnung
---

# 2. Lösung: Umrechnung

Hier müssen wir nur die eingegebene Zahl mit 1000 (Umrechnungsfaktor km -> m) multiplizieren.

```cs
Console.Write("Gib mir eine Anzahl von Kilometern: ");
string input = Console.ReadLine();

int number = int.Parse(input);

var meters = number * 1000;

Console.Write(number + " Kilometer sind " + meters + " Meter");
```