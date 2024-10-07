---
sidebar_position: 1
sidebar_label: 1. Gerade oder Ungerade?
---

# 1. Lösung: Gerade oder Ungerade?

Zuvor haben wir direkt in der `for`-Schleife berechnet, ob eine Zahl gerade ist. Jetzt ziehen wir diese Logik in eine `IsEven`-Methode und benutzen deren Ergebnis im `if`.

```cs
for(int i = 1; i <= 20; i++)
{
    var isEven = IsEven(i);
    if(isEven)
    {
        Console.WriteLine(i + " - Gerade");
    }
    else	
    {
        Console.WriteLine(i + " - Ungerade");
    }
}

bool IsEven(int number)
{
    var rest = number % 2;
    return rest == 0;
}
```

Du musst das Ergebnis von `IsEven` aber nicht unbedingt in einer Variable speichern. Du kannst es auch direkt im `if` benutzen.

```cs
for(int i = 1; i <= 20; i++)
{
    if(IsEven(i))
    {
        Console.WriteLine(i + " - Gerade");
    }
    else	
    {
        Console.WriteLine(i + " - Ungerade");
    }
}

bool IsEven(int number)
{
    var rest = number % 2;
    return rest == 0;
}
```