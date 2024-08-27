---
sidebar_position: 1
sidebar_label: Lösungen
---

# Lösungen: Fehler erkennen

## 1. Aufgabe

Hier fehlt nach `Console.WriteLine(i)` ein Semikolon (Strichpunkt). In C# müssen viele Codezeilen (sogenannte Statements) mit einem Semikolon abgeschlossen werden, um dem Computer zu sagen, dass das Statement jetzt vorbei ist und das nächste kommen kann.

```cs
for (int i = 0; i < 5; i++)
{
    Console.WriteLine(i);
}
```

## 2. Aufgabe

Wenn eine geschweifte Klammer geöffnet wird, bedeutet das, dass alles darin (bis zur nächsten schließenden geschweiften Klammer) zusammen gehört. Somit treten geschweifte Klammern immer in Paaren auf: auf jede öffnende muss immer irgendwann eine schließenden folgen. In diesem Fall fehlt der öffnenden geschweiften Klammer nach dem `if` ihr schließender Freund.

```cs
int x = 5;
int y = 10;

if (x > y)
{
    Console.WriteLine("x ist größer als y");
}
else
{
    Console.WriteLine("y ist größer oder gleich x");
}
```

## 3. Aufgabe

Im Abschnitt 2.1 haben wir Variablen und Datentypen kennengelernt. `int` sind immer Ganzzahlen und `string`s müssen mit Anführungzeichen gekennzeichnet werden. Hier wird versucht einen `string` in ein `int` zu schreiben. Das erlaubt der Computer nicht und die Anführungszeichen um die 20 müssen entfernt werden. Stattdessen wäre es theoretisch auch möglich, die Variable `x` zu einem `string` zu machen. Dann würde aber die Konsolenausgabe keinen Sinn mehr ergeben (probiere doch mal aus, was passiert, wenn du `x` zu einem `string`, statt einem `int` machst!).

```cs
int x = 20;
var result = x + 10;
Console.WriteLine("20 + 10 = " + result);
```

## 4. Aufgabe

C# ist eine Sprache, in der Groß- und Kleinschreibung sehr wichtig ist. Die Variable `ageInYears` ist nicht gleich `ageinYears`. Das `i` muss großgeschrieben werden, um die Variable im `if` richtig zu referenzieren.

```cs
int ageInYears = 14;

if (ageInYears >= 18)
{
    Console.WriteLine("Du bist volljährig");
}
else
{
    Console.WriteLine("Du bist noch minderjährig");
}
```

## 5. Aufgabe

Ein wichtiges Konzept in fast allen Programmiersprachen ist die Unterscheidung zwischen der Zuweisung `=` und dem Vergleich `==`. Das einzelne Gleichheitszeichen wird für die Zuweisung von Werten z.B. zu einer Variable benutzt (`int x = 20`). Dagegen wird das doppelte Gleichheitszeichen für den Vergleich von Werten benutzt (`if(x == 20)`).<br/>
Da das doppelte Gleichheitszeichen immer einen Wahrheitswert (`true` oder `false`) zurückgibt, können die beiden Arten auch kombiniert werden. Zum Beispiel steht nach der Ausführung dieses Codes (`var result = 30 == 40`) der Wert `false` in der Variable `result`. Der Computer rechnet immer zuerst die rechte Seite einer Zuweisung aus (hier `30 == 40`) und da 30 nicht gleich 40 ist, wird der Wert `false` in `result` geschrieben.

```cs
int age = 18;

if (age == 18)
{
    Console.WriteLine("Du bist genau 18 Jahre alt!");
}
```

## 6. Aufgabe

Hier verstecken sich zwei Fehler. Zum einen fehlt bei der Variable `i` der Datentype (`int` oder `var`). Zum anderen ist bei `Writeline` erneut die Groß- und Kleinschreibung nicht beachtet worden. Das `l` muss großgeschrieben werden.

```cs
for (int i = 0; i < 10; i++)
{
    Console.WriteLine(i);
}
```

## 7. Aufgabe

Auch hier sind wieder zwei Fehler versteckt. Um diese zu erkennen, müssen wir aber zuerst verstehen, was der Code eigentlich machen soll. Es sieht so aus, als solle von der BenutzerIn ein Text eingegeben werden, der dann direkt wieder ausgegeben wird.<br/>
Allerdings kann `Console.WriteLine()` nur Text ausgeben, nicht auslesen - dafür muss `Console.ReadLine()` benutzt werden. Dazu kommt, dass `Console.ReadLine()` immer einen `string` zurückgibt, der nicht in einer `int` Variable gespeichert werden kann: `input` muss also ein `string` sein.

```cs
Console.Write("Gib mir einen Text: ");
string input = Console.ReadLine();

Console.WriteLine("Du hast den Text '" + input + "' eingegeben");
```

## 8. Aufgabe

Hier kommt nun einiges zusammen. Lass uns wieder zuerst verstehen, was der Code tun soll. Es sollen die Zahlen von 1 bis 20 durchlaufen werden. Falls die Zahl durch 3 teilbar ist (`%` ist der sogenannte 'Modulo'-Operator, der den Rest bei einer Teilung zurückgibt), soll das auf der Konsole angezeigt werden, ansonsten soll nur die Zahl ausgegeben werden.<br/>
Damit können wir uns jetzt an die Behebung der Fehler machen. Zunächst muss das erste `if` durch `for` ausgetauscht werden, um eine Schleife zu markieren. Des Weiteren sind in der gleichen Zeile in den Runden Klammer nur Kommas - allerdings schreibt der Computer vor, dass dort Semikolons (Strichtpunkte) stehen müssen. Zuletzt fehlt nach dem `Console.WriteLine(i)` ein weiteres Semikolon. Und schon funktioniert der Code!

```cs
for (int i = 1; i <= 20; i++)
{
    if (i % 3 == 0)
    {
        Console.WriteLine(i + " ist durch 3 teilbar");
    }
    else
    {
        Console.WriteLine(i);
    }
}
```