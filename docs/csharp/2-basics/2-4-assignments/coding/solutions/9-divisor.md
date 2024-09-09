---
sidebar_position: 12
sidebar_label: 9. Teiler
---

# 9. Lösung: Teiler

Wir haben in vorherigen Aufgaben schon den Modulo-Operator `%` kennengelernt. Er gibt dir den Rest bei einer ganzzahligen Teilung zurück. Wenn der Rest 0 ist, wissen wir, dass die eine Zahl glatt durch die andere teilbar ist. Das können wir hier nutzen.

```cs
Console.Write("Gib mir eine Zahl: ");
var inputOne = Console.ReadLine();
var numberOne = int.Parse(inputOne);

Console.Write("Gib mir eine zweite Zahl: ");
var inputTwo = Console.ReadLine();
var numberTwo = int.Parse(inputTwo);

if(numberOne % numberTwo == 0)
{
	Console.WriteLine(numberTwo + " ist ein Teiler von " + numberOne);
}
else
{
	Console.WriteLine(numberTwo + " ist kein Teiler von " + numberOne);
}
```