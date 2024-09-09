---
sidebar_position: 10
sidebar_label: 8. Umsatzsteuer berechnen
---

# 8. Lösung: Umsatzsteuer berechnen

Nachdem wir den Preis eingelesen haben, müssen wir ihn mit 0.19 (=19%) multiplizieren, um den Umsatzsteuer-Anteil zu berechnen. Um den Rest zu bekommen, subtrahieren wir den Umsatzsteuer-Anteil vom Gesamtpreis.

```cs
Console.Write("Gib mir einen Preis in €: ");
var input = Console.ReadLine();
var price = int.Parse(input);

var vat = price * 0.19; // vat ist die englische Bezeichnung für Umsatzsteuer
var notVat = price - vat;

Console.WriteLine("Der Umsatzsteuer-Anteil ist " + vat + "€.");
Console.WriteLine("Der Nicht-Umsatzsteuer-Anteil ist " + notVat + "€.");
```