---
sidebar_position: 1
sidebar_label: 1. Ausgabe
---

# 1. Lösung: Ausgabe

Bei dieser Aufgabe ist es wichtig, im Hinterkopf zu behalten, dass die `.Length` Eigenschaft immer um 1 größer ist als der letzte zulässige Index (hier gespeichert in `maxIndex`).

```cs
int[] numbers = [1, 1, 2, 3, 5, 8, 13, 21];
var maxIndex = numbers.Length - 1;

Console.Write("Gib mir einen Index: ");
string input = Console.ReadLine();

int index = int.Parse(input);

if(index > maxIndex)
{	
    Console.WriteLine("Der Index " + index + " ist zu groß. Du kannst maximal die Zahl " + maxIndex + " eingeben.");
}
else
{
    Console.WriteLine("Die Zahl an Index " + index + " ist " + numbers[index] + "!");
}
```