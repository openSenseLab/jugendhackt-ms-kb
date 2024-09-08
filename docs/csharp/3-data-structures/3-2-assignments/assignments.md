---
sidebar_position: 1
sidebar_label: Aufgaben
---

# Aufgaben

## 1. Ausgabe

Schreibe ein Programm, das nach einem Index fragt und den Wert an diesem Index aus folgendem Array zurückgibt: `[1, 1, 2, 3, 5, 8, 13, 21]`.
Wenn die eingegebene Zahl größer ist als das Array lang, soll eine Meldung mit der höchstzulässigen Zahl ausgegeben werden.

Beispiel-Ausgabe:
```
Gib mir einen Index: 5
Die Zahl an Index 5 ist 8!
```
```
Gib mir einen Index: 21
Der Index 21 ist zu groß. Du kannst maximal die Zahl 7 eingeben.
```

### 1.1 Summe
Aufbauend auf der vorherigen Aufgabe, verändere das Programm so, dass es die Summe aller Zahlen bis zu dem übergebenen Index ausgibt, anstatt nur der Zahl an dem Index.

Beispiel-Ausgabe:
```
Gib mir einen Index: 4
Die Summe aller Zahlen bis zu Index 4 ist 12!
```

### 1.2 Durchschnitt
Aufbauend auf der vorherigen Aufgabe, verändere das Programm so, dass es den Durchschnitt aller Zahlen bis zu dem übergebenen Index ausgibt.<br/>
Tipp: Wenn du ein `int` durch ein `int` teilst, kommt immer ein `int` als Ergebnis zurück (alles nach dem Komma wirft der Computer weg). Allerdings ist ein Durchschnitt oft eine Kommazahl. Um das korrekte Ergebnis zu bekommen, musst du ein `int` durch ein `float` (Kommazahl) teilen (oder umgekehrt.) Um ein `float` zu erhalten, kannst du ein `int` in ein `float` umwandeln durch `(float)` vor der Zahl oder der Variable. In der Fachsprache nennt man das einen "Cast".
```cs
int number = 30;
float floatNumber = (float)number
```
```cs
float floatNumber = (float)30; // hier könntest du auch 30f schreiben anstatt (float)30
```

Beispiel-Ausgabe:
```
Gib mir einen Index: 4
Der Durchschnitt aller Zahlen bis zu Index 4 ist 2,4!
```

## 2. Maximum
Schreibe ein Programm, dass aus einem selbstgewählten Array die höchste Zahl finde.

Beispiel-Ausgabe für Array `[2, 6, -103, 81, 19, 41]`:
```
Die höchste Zahl ist 81.
```