---
sidebar_position: 8
sidebar_label: 6. Kreisumfang
---

# 6. Lösung: Kreisumfang

Der Kreisumfang berechnet sich durch die Formel 2πr.

```cs
Console.Write("Gib mir einen Kreisradius in cm: ");
string input = Console.ReadLine();

int number = int.Parse(input);

double circumference = 2 * Math.PI * number;
Console.WriteLine("Der Kreis hat einen Umfang von " + circumference + "cm");
```