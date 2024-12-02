---
sidebar_position: 1
sidebar_label: Aufgaben
---

# Aufgaben

Die folgenden Aufgaben bauen auf den Aufgaben aus dem Kapitel "4.4 Vererbung" auf.

## 1. Angriffe ersetzen

Bis jetzt erstellen die Klassen `Pikachu` und `Schiggy` noch `Attack`-Objekte, wenn sie den Konstruktor der Basisklasse aufrufen. Tausche diese Code durch die expliziten Klassen `Donnerblitz` bzw. `Aquaknarre` aus.<br/>
Verhindere anschließend, dass aus der Klasse `Attack` Objekte erzeugt werden können (wie wir es bereits bei der `Pokemon`-Basisklasse getan haben).

## 2. Kampf erstellen

Wenn du in `Program.cs` schaust, liegt dort der Code, der einen Kampf simuliert. Einen Kampf können wir aber auch durch eine Klasse modellieren.<br/>
Erstelle auf der obersten Projektebene eine Klasse `Fight`, die zwei Pokemon (`pokemonLeft` & `pokemonRight`) in ihrem Konstruktor als Parameter empfängt. Denke über Polymorphismus nach, wenn du dich für die Datentypen der beiden Parameter entscheidest.<br/>
Implementiere in `Fight` eine Methode `Start`, die den Kampf startet und durchführt. Diese Methode soll den Code enthalten, der aktuell in `Program.cs` steht, aber die Pokemon benutzen, die im Konstruktor an `Fight` übergeben wurden.<br/>
`Program.cs` soll dann nur noch ein `Fight`-Objekt erstellen mit Pikachu und Schiggy als Kampfteilnehmer und den Kampf über die `Start`-Methode starten.

## 3. Zweiter Angriff

Einen einzigen Angriff zu haben ist auf Dauer langweilig und lässt nicht so viele Variationen im Kampf zu. Bennene das Feld/Property `_attack`/`Attack` in `Pokemon` zu `_attack1`/`Attack1` um und implementiere die Möglichkeit, einen zweiten Angriff zu speichern.<br/>
Gib Schiggy `Biss` (15 Schaden) und Pikachu `Ruckzuckhieb` (10 Schaden) als zweiten Angriff.

## 4. Angriffe auswählen

Jetzt haben wir die Grundlagen für einen abwechslungsreichen Kampf gelegt. Allerdings benutzt der Code in `Fight` immer wieder nur den gleichen Angriff. Lass uns daher implementieren, dass du als SpielerIn auswählen kannst, welcher Angriff ausgeführt werden soll.

Hier hast du eine Beispiel-Ausgabe, wie es später ungefähr aussehen soll:
```
Pikachu ist and der Reihe:
[1] Donnerblitz
[2] Ruckzuckhieb
Welche Attacke soll eingesetzt werden? 2
Pikachu greift Schiggy mit Ruckzuckhieb an
Schiggy erleidet 10 Schaden und hat noch 90 HP

Schiggy ist and der Reihe:
[1] Aquaknarre
[2] Biss
Welche Attacke soll eingesetzt werden? 1
Schiggy greift Pikachu mit Aquaknarre an
Pikachu erleidet 20 Schaden und hat noch 80 HP

Pikachu ist and der Reihe:
[1] Donnerblitz
[2] Ruckzuckhieb
Welche Attacke soll eingesetzt werden? 1
Pikachu greift Schiggy mit Donnerblitz an
Schiggy erleidet 30 Schaden und hat noch 60 HP
```

Das wird einige größere Veränderungen im Kampf-Code bedeuten. Um dir ein wenig Hilfestellung im Aufbau des Codes zu geben, implementiere folgende Methoden in `Pokemon` und füge deren Aufrufe in der `Start`-Methode der `Fight`-Klasse zusammen.

`public void PrintAttacks()` -> Gibt auf der Konsole aus, welche Attacken das Pokemon beherrscht

`public Attack GetAttack(int attackNumber)` -> Gibt eine Attacke anhand ihrer Nummer zurück. 1 ist Attack1, ansonsten Attack2

`public void Attack(Pokemon pokemon, int attackNumber)` -> Greift das übergebene `pokemon` mit dem eigenen Angriff (entsprechende der übergebenen `attackNumber`) an, indem es den Schaden des gewählten Angriffs dem übergebenen `pokemon` zufügt.