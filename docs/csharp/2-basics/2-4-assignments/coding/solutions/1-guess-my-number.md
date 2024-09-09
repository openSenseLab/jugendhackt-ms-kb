---
sidebar_position: 1
sidebar_label: 1. Errate meine Zahl
---

# 1. Lösung: Errate meine Zahl

```cs
Console.Write("Errate meine Zahl: ");
string input = Console.ReadLine();

int number = int.Parse(input);

if(number == 39)
{
	Console.WriteLine("Korrekt!");
}
else
{
	Console.WriteLine("Falsch!");
}
```