---
sidebar_position: 3
sidebar_label: 1.2 Durchschnitt
---

# 1.2 Lösung: Durchschnitt

In der vorherigen Aufgabe haben wir die Summe bereits berechnet. Um zum Durchschnitt zu kommen, müssen wir jetzt nur noch die Summe durch die Anzahl der Werte teilen. Dafür kannst du den eingegebenen `index` benutzen, wobei du nochmal 1 dazuzählen musst, da der Index bei 0 anfängt. Eine Zahl an Index 3 ist die vierte Zahl im Array.

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
    var sum = 0;
    for (int i = 0; i <= index; i++)
    {
        sum = sum + numbers[i];
    }

    // Wenn wir hier 'sum' nicht zu einem float umwandeln würden, wäre das Ergebnis ein int
    // und wir würden alle Zahlen nach dem Komma im Ergebnis verlieren.
    // Bei 5 / 2 wäre das Ergebnis dann 2, nicht 2,5.
    float average = (float)sum / (index + 1);
    
    Console.WriteLine("Der Durchschnitt aller Zahlen bis zu Index " + index + " ist " + average + "!");
}
```