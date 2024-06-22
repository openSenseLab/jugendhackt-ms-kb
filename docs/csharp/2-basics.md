---
sidebar_position: 2
sidebar_label: 2. Grundlagen
---

# Grundlagen der Programmierung

Alle Daten, die du benutzt, haben einen sogenannten Datentyp. Ein paar der wichtigsten für den Anfang sind:
- `int`: Ganzzahl, z.B. 7
- `float`: Kommazahl, z.B. 4.3 (C# basiert auf der englischen Zahlenschreibweise, wesshalb für Kommazahlen ein Punkt benutzt wird)
- `string`: eine Kette an beliebigen Zeichen, zb. "abc123%"
- `bool`: ein Wahrheitswert: `true` oder `false`

Diese Datentypen kannst du jetzt benutzen, um sogenannte Variablen erstellen. In Variablen kannst du den konkreten Wert des Datentyps speichern.
```cs
int age = 16;
```
Was du hier an einem Beispiel siehst, nennt man Initialisierung einer Variable. Sie folgt immer der gleichen Struktur:
```
<Datentyp> <Name der Variable> = <Wert>;
```
In diesem Fall ist `int` der Datentyp, `age` der Name der Variable und `16` der Wert, der in die Variable geschrieben wird. Das `=` nennt man Zuweisung und gibt an, dass die rechte Seite (`16`) in die linke Seite (`age`) geschrieben werden soll.

Weitere Beispiele:
```cs
float bodySize = 1.73;
string name = "Billie Joe Armstrong";
bool isSleeping = false;
```
Beachte, dass der Wert eines `string` immer in `"` geschrieben werden.


Sofern der Datentyp des Werts auf der rechte Seite der Zuweisung klar ist, kannst du auch `var` als Datentyp benutzen und dadurch dem Computer sagen, er soll den Datentyp selbst herausfinden.
```cs
var age = 16;
```

## Kontrollflussanweisung
Neben Variablen ist die andere wichtige Komponente Kontrollflussanweisungen. Code wird immer von oben nach unten ausgeführt, doch manchmal will man Code überspringen oder wiederholen. Im folgenden werden wir auf `if`, `for` und `while` schauen.

### if
Das keyword `if` wird benutzt, um auf Basis einer Prüfung Code auszuführen oder zu überspringen.
```cs
if(age > 17)
{
	Console.WriteLine("Volljährig");
}
```
Auf der Konsole wird nur `Volljährig` ausgegeben, wenn in der Variable `age` eine Zahl von 18 oder höher drin steht.

Innerhalb der runden Klammer nach dem `if` muss immer ein Wahrheitswert stehen. Diesen Teil nennt man Bedingung. In obigem Beispiel wird die Bedingung `age > 17` zu `true` oder `false` evaluiert, sobald der Code ausgeführt wird. Es ist natürlich auch möglich, das Ergebnis zuerst in einer Variable zu speichern und dann im `if` zu überprüfen, z.B.
```cs
bool isOfLegalAge = age > 17;
if(isOfLegalAge)
{
	Console.WriteLine("Volljährig");
}
```

Das `if` kann noch durch ein `else` ergänzt werden, um anzugeben, welcher Code ausgeführt werden soll, wenn die Bedingung des `if` `false` ergibt.
```cs
if(age > 17)
{
	Console.WriteLine("Volljährig");
}
else
{
	Console.WriteLine("Minderjährig");
}
```