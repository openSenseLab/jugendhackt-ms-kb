---
sidebar_position: 1
sidebar_label: 2. Rechnen
---

# 2. Lösung: Rechnen

```cs
Console.Write("Gib mir eine erste Zahl: ");
var firstInput = Console.ReadLine();
Console.Write("Gib mir eine zweite Zahl: ");
var secondInput = Console.ReadLine();
Console.Write("Welche Operation willst du ausführen (a/s/m/d)? ");
var operation = Console.ReadLine();

var firstNumber = float.Parse(firstInput);
var secondNumber = float.Parse(secondInput);

float result = 0;

if(operation == "a")
{
    result = Add(firstNumber, secondNumber);
}
else if(operation == "s")
{
    result = Subtract(firstNumber, secondNumber);
}
else if(operation == "m")
{
    result = Multiply(firstNumber, secondNumber);
}
else if(operation == "d")
{
    result = Divide(firstNumber, secondNumber);
}

Console.WriteLine("Das Ergebnis ist: " + result);

float Add(float number1, float number2)
{
    return number1 + number2;
}

float Subtract(float number1, float number2)
{
    return number1 + number2;
}

float Multiply(float number1, float number2)
{
    return number1 * number2;
}

float Divide(float number1, float number2)
{
    return number1 / number2;
}
```