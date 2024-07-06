---
sidebar_position: 6
sidebar_label: 4. Betrag
---

# 4. Lösung: Betrag

Da der Betrag von positiven Zahlen immer die Zahl selbst ist, müssen wir nur prüfen ob die eingegebene Zahl negativ ist. Sollte das der Fall sein, multiplizieren wir sie mit `-1`, um den positiven Wert zu bekommen.

```cs
Console.Write("Gib mir eine Zahl: ");
string input = Console.ReadLine();

int number = int.Parse(input);

var absolute = number;
if(number < 0)
{
	absolute = number * -1;
}

Console.WriteLine("Der Betrag von " + number + " ist " + absolute);
```