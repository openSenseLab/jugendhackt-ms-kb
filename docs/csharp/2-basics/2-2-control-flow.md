---
sidebar_position: 2
sidebar_label: 2.2 Kontrollflussanweisung
---

# Grundlagen der Programmierung

## Kontrollflussanweisung
Neben Variablen ist die andere wichtige Komponente Kontrollflussanweisungen. Code wird immer von oben nach unten ausgeführt, doch manchmal will man Code überspringen oder wiederholen. Im folgenden werden wir auf `if`, `for` und `while` schauen.

### if
Das keyword `if` wird benutzt, um auf Basis einer Prüfung Code auszuführen oder zu überspringen.
```cs
if (age > 17)
{
	Console.WriteLine("Volljährig");
}
```
Auf der Konsole wird nur `Volljährig` ausgegeben, wenn in der Variable `age` eine Zahl von 18 oder höher drin steht.

Innerhalb der runden Klammer nach dem `if` muss immer ein Wahrheitswert stehen. Diesen Teil nennt man Bedingung. In obigem Beispiel wird die Bedingung `age > 17` zu `true` oder `false` evaluiert, sobald der Code ausgeführt wird. Es ist natürlich auch möglich, das Ergebnis zuerst in einer Variable zu speichern und dann im `if` zu überprüfen, z.B.
```cs
bool isOfLegalAge = age > 17;
if (isOfLegalAge)
{
	Console.WriteLine("Volljährig");
}
```

Das `if` kann noch durch ein `else` ergänzt werden, um anzugeben, welcher Code ausgeführt werden soll, wenn die Bedingung des `if` `false` ergibt.
```cs
if (age > 17)
{
	Console.WriteLine("Volljährig");
}
else
{
	Console.WriteLine("Minderjährig");
}
```

### for

`for` wird benutzt, um einen Codeabschnitt beliebig oft zu wiederholen, z.B. schreibt folgender Code die Zahlen 1 bis 5 in die Ausgabe
```cs
for (int i = 1; i < 6; i++)
{
    Console.WriteLine(i);
}
```
Die Variable `i` wird mit 1 initialisiert (`int i = 1`) und bei jedem Durchlauf der Schleife um 1 hochgezählt (`i++`). Sobald die Ausführungsbedingung (`i < 6`) nicht mehr erfüllt, sprich `i` größer als 5 ist, wird die Schleife beendet. 

Aufgebaut ist `for` aus folgenden Komponenten:
```
for (<A>; <Bedingung>; <B>)
```

`<A>` wird vor dem ersten Durchlauf von `for` ausgeführt (im Beispiel oben die Initialisierung der Variable `i`).<br/>
Die `Bedingung` wird direkt vor jedem Durchlauf überprüft und nur wenn sie `true` ergibt (also erfüllt ist), wird die Schleife ein weiteres Mal ausgeführt.<br/>
`B` wird nach jedem Durchlauf von `for` ausgeführt (im Beispiel oben die Inkrementierung von `i`, also die Erhöhung von `i` um 1).

Kopiere den obigen Code doch einmal in deine `Program.cs` und führe ihn über `dotnet run` aus. Wie müsstest du ihn verändern, dass er alle Zahlen von 1 bis 10 oder 5 bis 10 ausgibt?

### while

`while` ist sehr ähnlich zu `for`, nur in leicht abgeänderter Schreibweise
```cs
int i = 1;
while (i < 6)
{
    Console.WriteLine(i);
    i++;
}
```

Dieser Code gibt ebenfalls alle Zahlen von 1 bis 5 aus. Und bestimmt erkennst du auch schon die einzelnen Bestandteile der `for`-Schleife wieder. Zuerst wird `i` mit dem Wert 1 initialisiert (`int i = 1`). Die `while`-Schleife überprüft dann vor jeder Ausführung, ob die angegebene Bedingung (`i < 6`) noch erfüllt ist, und führt den nachfolgenden Code nur aus, wenn diese Bedingung `true` ergibt. Zum Schluss wird am Ende jedes Durchlaufs `i` um 1 erhöht (`i++`).

### Vergleiche

In den vorherigen Abschnitten hast du gelernt, dass wir Vergleiche (`i < 6`) anstellen können, um Wahrheitswerte (`true`, `false`) zu erhalten. Das Zeichen, das du in der Mitte des Vergleichs siehst (`<`) nennt man Vergleichsoperator und ist hier ein 'kleiner als'. Es gibt aber noch viele Weitere:
```cs
i < 6   -> kleiner als
i > 6   -> größer als
i <= 6  -> kleiner gleich
i >= 6  -> größer gleich
i == 6  -> exakt gleich
```

Verwechsle vor allem das letzte Beispiel, den exakten Vergleich (`==`), nicht mit der Zuweisung `=`. Bei der Zuweisung wird immer ein Wert in eine Variable geschrieben, wogegen beim exakten Vergleich ein Wahrheitswert ermittelt wird.
