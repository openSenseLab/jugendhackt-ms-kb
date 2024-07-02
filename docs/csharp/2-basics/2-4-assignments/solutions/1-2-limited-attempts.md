---
sidebar_position: 3
sidebar_label: 1.2 Limitierte Versuche
---

# 1.2 Lösung: Limitierte Versuche

Wir durchlaufen die Schleife 5 Mal (Achtung: da wir hier bei 0 anfangen zu zählen, muss die Bedinung "kleiner als 5" sein, nicht "kleiner gleich 5") und beenden das Program mit `return;` sofort, wenn die korrekte Zahl gefunden wurde. Wenn die 5 Versuche aufgebraucht sind, wird die `for`-Schleife automatisch beendet und wir geben "Verloren!" aus.

```cs
for (int i = 0; i < 5; i++)
{	
	Console.Write("Errate meine Zahl: ");
	string input = Console.ReadLine();

	int number = int.Parse(input);

	if(number == 39)
	{
		Console.WriteLine("Korrekt!");
		return;
	}
	else
	{
		Console.WriteLine("Falsch!");
	}
}
Console.WriteLine("Verloren!");
```