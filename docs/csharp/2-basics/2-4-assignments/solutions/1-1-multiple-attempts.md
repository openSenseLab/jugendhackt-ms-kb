---
sidebar_position: 2
sidebar_label: 1.1 Mehrere Versuche
---

# 1.1 Lösung: Mehrere Versuche

Da wir keine feste Anzahl an Versuchen vorgegeben haben, verwenden wir am besten eine `while`-Schleife, die so lange läuft wie `isGuessing` auf `true` steht.<br/>
Neben der Prüfung der Zahl muss der ganze Anfangsteil ebenfalls mit in die Schleife, weil wir bei jedem Lauf nach einer neuen Zahl fragen wollen.

```cs
bool isGuessing = true;
while(isGuessing)
{	
	Console.Write("Errate meine Zahl: ");
	string input = Console.ReadLine();

	int number = int.Parse(input);

	if(number == 39)
	{
		Console.WriteLine("Korrekt!");
		isGuessing = false;
	}
	else
	{
		Console.WriteLine("Falsch!");
	}
}
```