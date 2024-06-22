---
sidebar_position: 3
sidebar_label: 2.3 Eingaben & Ausgaben
---

# Eingaben & Ausgaben

## Eingabe

Um Programme bedienen zu können, ist die Eingabe von Daten sehr wichtig. Wir haben bereits den Befehl
```cs
Console.WriteLine("Hello, World!");
```
gesehen, der den `string` "Hello, World!" im Terminal ausgibt.

Wenn dir das Terminal zu unübersichtlich ist, kannst du auch den Befehl `clear` eingeben und alle vorherigen Ausgaben löschen.
![Ein Screenshot aus dem VSCode Terminal, in das der Befehl clear eingegeben wurde](../../assets/csharp/vscode_clear_terminal.jpg)

Der Unterschied zwischen `Console.Write()` und `Console.WriteLine()` ist übrigens, dass `Console.WriteLine()` nach der Ausgabe des Text eine neue Zeile im Terminal macht. `Console.Write()` hingegen nicht.

## Ausgabe

Wir können aber auch den umgekehrten Weg gehen und währen der Ausführung des Programms auf Eingaben warten. Das machst du mit dem Befehl `Console.ReadLine()`. Sobald das Programm zu dieser Zeile kommt, wartet es so lange bis du etwas in das Terminal eingibst und Enter drückst.

Folgendes Programm wartet also auf deine Eingabe, speichert sie in einer Variable `input` ab und gibt sie direkt wieder auf dem Terminal aus. Probiere es einmal aus!
```cs
Console.Write("Gib ein paar Zeichen ein und drücke Enter: ");
string input = Console.ReadLine();
Console.WriteLine(input);
```


## Umwandlung

Beachte, dass `Console.ReadLine()` dir immer einen `string` zurückgibt, auch wenn du eine Zahl eingibst. Falls du also ein `int` brauchst, weil du mit der Eingabe später rechnen willst, musst du den `string` erst noch in `int` umwandeln.

Das kannst du mit `int.Parse(<variable>)` machen. In folgendem Programm gibst du eine Zahl ein, sie wird von `string` zu `int` umgewandelt und bei der Ausgabe verdoppelt (`number * 2`).
```cs
Console.Write("Gib mir eine Zahl: ");
string input = Console.ReadLine();

int number = int.Parse(input);

Console.WriteLine(number * 2);
```

## Konkatenieren
Mehere Bestandteile zu einem `string` zusammenzuhängen, nennt man Konkatenieren. Das ist besonders hilfreich wenn du Ausgaben auf dem Terminal machen willst. Im Code kannst du das mit dem `+` Zeichen machen.

Der folgende Code ist eine leich abgeänderte Variante von oben und gibt am Ende aus, ob die eingegebene Zahl größer oder kleiner/gleich 10 ist.
```cs
Console.Write("Gib mir eine Zahl: ");
string input = Console.ReadLine();

int number = int.Parse(input);

if(number > 10)
{
	Console.WriteLine("Die Zahl " + number + " ist größer als 10");
}
else
{
	Console.WriteLine("Die Zahl " + number + " ist kleiner oder gleich 10");
}
```

Bei einer Eingabe von `11` erscheint also die Ausgabe
```
Die Zahl 11 ist größer als 10
```

Das funktioniert aber nicht nur bei der Ausgabe. Da das Ergebnis einer Konkatenation immer ein `string` ist, kannst du es auch in einer Variable schreiben. Der folgende Code produziert das gleiche Ergebnis wie oben
```cs
Console.Write("Gib mir eine Zahl: ");
string input = Console.ReadLine();

int number = int.Parse(input);

string output;
if(number > 10)
{
	output = "Die Zahl " + number + " ist größer als 10";
}
else
{	
	output = "Die Zahl " + number + " ist kleiner oder gleich 10";
}

Console.WriteLine(output);
```

Wir speichern das Ergebnis der Konkatenation erst in einer Variable `output` von typ `string` und geben dann am Ende den Inhalt der Variable im Terminal aus. Generell ist in solch einem Fall aber die erste Variante zu empfehlen, weil sie weniger kompliziert ist und dort weniger Code geschrieben werden muss. Das Ergebnis ist bei beiden Varianten aber gleich.