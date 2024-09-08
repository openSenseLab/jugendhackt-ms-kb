---
sidebar_position: 10
sidebar_label: 8.1 Variable Umsatzsteuer
---

# 8.1 Lösung: Variable Umsatzsteuer

Jetzt wird es etwas anspruchsvoller, denn um diese Aufgabe lösen zu können, muss man zu einer Kommazahl kommen. Diese Kommazahl haben wir in der Basis-Aufgabe noch per Hand in den Code geschrieben (0.19), jetzt müssen wir sie aber berechnen.

Im unten stehenden Beispiel lesen wir mit `numberVat` die Prozentzahl ein. Um aber zu einer Kommazahl zu kommen, müssen wir die Prozentzahl durch 100 teilen. Wenn du in C# aber ein `int` durch ein `int` teilst, kommt immer ein `int` als Ergebnis raus. Wir brauchen aber ein `float` (Kommazahl). Dafür muss eine der beiden Zahlen in der Division ein `float` sein. Hier können wir die 100 ganz einfach zu einem `float` machen, indem wir ein `f` hinter die Zahl schreiben.

```cs
Console.Write("Gib mir einen Preis in €: ");
var inputPrice = Console.ReadLine();
var price = int.Parse(inputPrice);

Console.Write("Gib mir einen Umsatzsteuer-Prozentsatz: ");
var inputPercent = Console.ReadLine();
// hier wäre auch "float numberVat = float.Parse(inputPercent);" möglich. Dann wäre numberVat ein float
// und in der unteren Division kann das f hinter 100 entfallen.
int numberVat = int.Parse(inputPercent);

float percent = numberVat / 100f;

var vat = price * percent;
var notVat = price - vat;

Console.WriteLine("Der Umsatzsteuer-Anteil ist " + vat + "€.");
Console.WriteLine("Der Nicht-Umsatzsteuer-Anteil ist " + notVat + "€.");
```