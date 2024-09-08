---
sidebar_position: 2
sidebar_label: 1.1 Summe
---

# 1.1 Lösung: Summe

Bis auf den `else`-Zweig bleibt alles gleich. Dort muss jetzt aber das Array in einer `for`-Schleife durchlaufen und jede Zahl aufsummiert werden. Beachte, dass du nicht auf `numbers[index]` zugreifst, sondern auf `numbers[i]`, denn die Zahl in `index` bleibt immer gleich. `i` erhöht sich mit jedem Durchlauf der `for`-Schleife und macht es so möglich, dass du das Array durchlaufen kannst.

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
    Console.WriteLine("Die Summe aller Zahlen bis zu Index " + index + " ist " + sum + "!");
}
```