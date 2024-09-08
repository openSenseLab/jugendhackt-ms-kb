---
sidebar_position: 4
sidebar_label: 2. Maximum
---

# 2. Lösung: Maximum

Am Anfang schreiben wir ein Array aus selbstgewählten Zahlen und laufen dann einmal über das ganze Array. Jedes Mal, wenn wir eine Zahl finden, die größer ist als das aktuelle Maximum, aktualisieren wir die Variable. Dadurch muss am Ende die größte Zahl in `maximum` stehen.

```cs
int[] numbers = [2, 6, -103, 81, 19, 41];

// Hier initialisieren wir 'maximum' mit der ersten Zahl im Array.
// Falls später eine größere kommt, wird 'maximum' aktualisiert.
// Du solltest 'maximum' aber nicht mit 0 initialisieren, denn es könnte sein,
// dass alle Zahl in dem Array negativ sind. Dann wäre 0 die größte Zahl,
// kommt aber nicht im Array vor
int maximum = numbers[0];
for(int i = 0; i < numbers.Length; i++)
{
    var number = numbers[i];
    if(number > maximum)
    {
        maximum = number;
    }
}

Console.WriteLine("Die höchste Zahl ist " + maximum + ".");
```