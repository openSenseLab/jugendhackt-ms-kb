---
sidebar_position: 1
sidebar_label: Aufgaben
---

# Aufgaben

Hier findest du einige Aufgaben, die die vorher beschriebenen Grundlagen auf die eine oder andere Art umsetzen. Lösungen und Zwischenlösungen findest du im Ordner "Lösungen" unter den Aufgaben in der Navigations-Übersicht.
**Bitte denke aber daran, dass in der Programmierung viele Wege nach Rom führen. Das heißt, dass wir dir *mögliche* Lösungen geben. Wenn dein Programm anders aussieht, aber die Aufgabe ebenfalls korrekt löst, ist es genauso richtig.**

Generell gilt in der Informatik: Wenn du nicht weiter kommst, ist die beste Lösungsstrategie eine Pause zu machen oder an einem anderen Tag weiterzuarbeiten. Sich an einem Problem stundenlang den Kopf zu zerbrechen führt nur sehr selten zum Erfolg.

## 1. Errate meine Zahl

In Kapitel 2.3 haben wir bereits den Grundstein für das Eingeben und Umwandeln von Zahlen gelernt
```cs
Console.Write("Gib mir eine Zahl: ");
string input = Console.ReadLine();

int number = int.Parse(input);
```

Erweitere das Programm jetzt so, dass es überprüft, ob die eingegebene Zahl gleich 39 ist. Falls das der Fall ist, gib `Korrekt!` aus. Andernfalls `Falsch!`.

Beispiele:
```
Errate meine Zahl: 23
Falsch!
```
```
Errate meine Zahl: 39
Korrekt!
```

## 2. Gerade oder Ungerade?
Erstelle ein Programm, das die Zahlen von 1 bis 10 ausgibt mit der Information, ob sie gerade ist oder nicht. Benutze eine `for`-Schleife dafür.

Tipps:
1. Versuche zuerst die Ausgabe von den Zahlen 1-10 zu implementieren und wenn das funktioniert, das Programm so zu erweitern, dass es auch gerade/ungerade ausgibt
2. Herauszufinden, ob eine Zahl gerade oder ungerade ist, ist nicht so einfach. Du kannst zum Beispiel den Modulo-Operator `%` benutzen, der den Rest einer ganzzahligen Teilung ausgibt. `int rest = 7 % 4;` führt dazu, dass in `rest` 3 steht, da 7 geteilt durch 4 das Ergebnis 1 mit Rest 3 ergibt. Bei `int rest = 12 % 2` steht in `rest` am Ende 0, da 12 ohne Rest durch 2 teilbar ist. Gerade Zahlen sind also immer ohne Rest teilbar. Wie wohl der Rest bei einer Teilung von ungeraden Zahl durch 2 aussieht?

Beispiel-Ausgabe:
```
1 - ungerade
2 - gerade
3 - ungerade
4 - gerade
...
```

## 3. Fakultät
Erstelle ein Programm, das nach einer Zahl fragt und die Fakultät davon ausgibt.
Beispiel:
```
Gib mir eine Zahl: 5
Fakultät von 5 ist 120
```
