---
sidebar_position: 5
sidebar_label: 3. Gerade oder Ungerade?
---

# 3. Lösung: Gerade oder Ungerade?

Gerade Zahlen sind immer ohne Rest durch 2 teilbar. Ungerade Zahlen nicht. Somit wissen wir also: Wenn der Rest 0 ist, muss die Zahl gerade sein - andernfalls ungerade.

```cs
for(int i = 0; i <= 10; i++)
{
	var rest = i % 2;
	if(rest == 0)
	{
		Console.WriteLine(i + " - gerade");
	}
	else	
	{
		Console.WriteLine(i + " - ungerade");
	}
}
```