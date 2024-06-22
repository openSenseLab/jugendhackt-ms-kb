---
sidebar_position: 1
sidebar_label: 2.1 Variablen
---

# Grundlagen der Programmierung

## Variablen

Alle Daten, die du benutzt, haben einen sogenannten Datentyp. Ein paar der wichtigsten für den Anfang sind:
- `int`: Ganzzahl, z.B. 7
- `float`: Kommazahl, z.B. 4.3 (C# basiert auf der englischen Zahlenschreibweise, wesshalb für Kommazahlen ein Punkt benutzt wird)
- `string`: eine Kette an beliebigen Zeichen, zb. "abc123%"
- `bool`: ein Wahrheitswert: `true` oder `false`

Diese Datentypen kannst du jetzt benutzen, um sogenannte Variablen zu erstellen. In Variablen kannst du den konkreten Wert des Datentyps speichern.
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
Beachte, dass der Wert eines `string` immer in `"` geschrieben werden muss.


Sofern der Datentyp des Werts auf der rechte Seite der Zuweisung klar ist, kannst du auch `var` als Datentyp benutzen und dadurch dem Computer sagen, er soll den Datentyp selbst herausfinden.
```cs
var age = 16;
```

### Inkrementieren
Der folgende Code erhöht die Variable `age` um 1
```cs
int age = 14;
age = age + 1;
```

Bei einer Zuweisung (Zeile 2), evaluiert der Computer immer zuerst die rechte Seite (`age + 1`) und speichert das Ergebnis dann in der Variable auf der linken Seite. Beachte, dass in Zeile 2 kein Datentyp (`int`) vor `age` mehr benötigt wird, da der Datentyp von `age` bereits in der Zeile darüber bei der ersten Verwendung angegeben wurde.<br/>
Der Computer setzt also zuerst den aktuellen Wert von `age` auf der rechten Seite ein
```cs
age = 14 + 1;
```
rechnet dann das ergebnis aus speichert es in `age` ab. `age` hat danach den Wert `15`.
```cs
age = 15;
```

Eine Zahl um 1 zu erhöhen nennet man Inkrementieren und wird in der Programmierung sehr häufig benötigt. Deshalb gibt es dafür eine eigene Schreibweise, bei der einfach nur ein `++` hinter die Variable gehängt wird. Somit ist 
```cs
age = age + 1;
```
und
```cs
age++;
```
das gleiche. Die Variable `age` wird um 1 erhöht.