---
sidebar_position: 13
sidebar_label: 10. FizzBuzz
---

# 10. Lösung: FizzBuzz

Das Wichtige bei dieser Aufgabe ist, zuerst zu prüfen, ob die Zahl sowohl durch 3 als auch durch 5 (also durch 15) teilbar ist. Ansonsten gibst du Fizz oder Buzz aus, aber nicht FizzBuzz.

```cs
for(int i = 1; i <= 30; i++)
{
	if(i % 15 == 0)	
	{
		Console.WriteLine("FizzBuzz");
	}
	else if(i % 5 == 0)
	{
		Console.WriteLine("Buzz");
	}
	else if(i % 3 == 0)
	{
		Console.WriteLine("Fizz");
	}
	else
	{
		Console.WriteLine(i);
	}
}
```