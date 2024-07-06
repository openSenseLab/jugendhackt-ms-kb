---
sidebar_position: 9
sidebar_label: 7. Kreisfläche
---

# 7. Lösung: Kreisfläche

Die Kreisfläche berechnet sich durch die Formel πr², was das gleiche ist wie π \* r \* r.

```cs
Console.Write("Gib mir einen Kreisradius in cm: ");
string input = Console.ReadLine();

int number = int.Parse(input);

double circleArea = Math.PI * number * number;
Console.WriteLine("Der Kreis hat eine Fläche von " + circleArea + "cm²");
```