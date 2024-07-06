---
sidebar_position: 2
sidebar_label: Fehler erkennen
---

# Fehler erkennen

Im Folgenden siehst du einige Codebeispiele, in denen mindestens ein Fehler versteckt ist, durch den sich das Programm nicht ausführen lässt (in der Fachsprache: es lässt sich nicht kompilieren). Finde alle Fehler, kopiere den Code nach VS Code und behebe sie dort. Wenn du richtig liegst, wird das Programm vom Computer ausgeführt.

## 1. Aufgabe

```cs
for (int i = 0; i < 5; i++)
{
    Console.WriteLine(i)
}
```

## 2. Aufgabe

```cs
int x = 5;
int y = 10;

if (x > y)
{
    Console.WriteLine("x ist größer als y");
else
{
    Console.WriteLine("y ist größer oder gleich x");
}
```

## 3. Aufgabe

```cs
int x = "20";
var result = x + 10;
Console.WriteLine("20 + 10 = " + result);
```

## 4. Aufgabe

```cs
int ageInYears = 14;

if (ageinYears >= 18)
{
    Console.WriteLine("Du bist volljährig");
}
else
{
    Console.WriteLine("Du bist noch minderjährig");
}
```

## 5. Aufgabe

```cs
int age = 18;

if (age = 18)
{
    Console.WriteLine("Du bist genau 18 Jahre alt!");
}
```

## 6. Aufgabe

```cs
for (i = 0; i < 10; i++)
{
    Console.Writeline(i);
}
```

## 7. Aufgabe

```cs
Console.Write("Gib mir eine Zahl: ");
int input = Console.WriteLine();

Console.WriteLine("Du hast die Zahl " + input + " eingegeben");
```

## 8. Aufgabe

```cs
if (int i = 0, i < 20, i++)
{
    if (i % 3 == 0)
    {
        Console.WriteLine(i + " ist durch 3 teilbar");
    }
    else
    {
        Console.WriteLine(i)
    }
}
```