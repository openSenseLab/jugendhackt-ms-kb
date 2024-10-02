---
sidebar_position: 1
sidebar_label: Aufgaben
---

# Aufgaben

Die Aufgaben innerhalb der Objektorientierung werden ab jetzt aufeinander aufbauen. Wir werden zusammen Pokemon modellieren und später gegeneinander kämpfen lassen (zur einfacheren Benutzung werden wir hier und da von den tatsächlichen Pokemon-Regeln abweichen).

Erstelle dir daher am besten ein neues Projekt, indem du VS Code (wie in `1. Erste Schritte` beschrieben) in einem neuen Ordner "Pokemon" öffnest und dort ein neues .net-Projekt erstellst (`dotnet new console --name Pokemon --framework net8.0 --language "C#"`).

## 1. Grundstruktur

Schreibe eine neue Klasse `Pokemon` mit einem Namen und einem Level, die außerhalb der Klasse ausgelesen, aber nicht verändert werden können.<br/>
Erstelle dann ein Pokemon-Objekt und gib den Namen und das Level des Pokemons aus dem Objekt auf der Konsole aus

Beispiel-Ausgabe:
```
Pikachu hat Level 5
```

## 2. Gesundheit

Pokemon können solange kämpfen wie ihre Gesundheit über 0 ist. Erstelle für die Gesundheit ein Feld & Property. Allerdings soll der Wert dafür nicht in den Konstruktor gegeben werden, sondern innerhalb der Klasse bei Objekterstellung immer auf 100 gesetzt werden. Gib auch diesen Wert auf der Konsole aus.

Beispiel-Ausgabe (HP = Health Points, die Abkürzung für Gesundheitspunkte):
```
Pikachu hat Level 5 und 100 HP
```

## 3. Schaden & Heilung

Jetzt wo wir Gesundheitspunkte (HP) haben, können wir sie auch verändern. Implementiere zwei Methoden, die dem Pokemon Schaden zufügen und es heilen. Der Wert, der von den HP abgezogen bzw. hinzugefügt werden soll, soll als Argument in die Methode übergeben werden.<br/>
Gib innerhalb der Methoden auf der Konsole aus, um wieviel die HP sich verändert und welchen neuen Wert sie haben. Achte auch darauf, dass HP niemals unter 0 oder über 100 sein können.

Beispiel-Ausgabe:
```
Pikachu hat Level 5 und 100 HP
Pikachu erleidet 20 Schaden und hat noch 80 HP
Pikachu wird um 15 HP geheilt und hat nun 95 HP
Pikachu erleidet 150 Schaden und ist kampfunfähig
```

## 4. Angriff

Was den Pokemon noch zum kämpfen fehlt, sind natürlich Angriffe. Erstelle eine neue Klasse `Attack`, die im Konstruktor einen Namen und einen Schadenswert entgegennimmt und diese über Properties nach außen gibt.<br/>
Erweitere anschließend den Pokemon-Klasse so, dass die bei der Erstellung zuätzlich einen Angriff bekommt und über ein Property nach außen gibt. Gib Pikachu dann die Attacke Donnerblitz mit einem Schaden von 30.

Beispiel-Ausgabe:
```
Pikachu hat Level 5 und 100 HP
Pikachu beherrscht Donnerblitz, das 30 Schaden anrichtet
```

## 5. Der erste Kampf

Jetzt sind wir bereit einen ersten kleinen Kampf zu inszenieren. Erstelle ein zweites Pokemon Schiggy mit dem Angriff Aquaknarre und Schaden 20. Danach sollen die beiden Pokemon sich gegenseitig angreifen bis eines kampfunfähig ist. Übergib dafür z.B. den Schaden von Pikachus Attacke an die Methode, die Schaden bei Schiggy verursacht, und andersherum.

Beispiel-Ausgabe:
```
Pikachu greift an
Schiggy erleidet 30 Schaden und hat noch 70 HP
Schiggy greift an
Pikachu erleidet 20 Schaden und hat noch 80 HP
Pikachu greift an
Schiggy erleidet 30 Schaden und hat noch 40 HP
Schiggy greift an
Pikachu erleidet 20 Schaden und hat noch 60 HP
Pikachu greift an
Schiggy erleidet 30 Schaden und hat noch 10 HP
Schiggy greift an
Pikachu erleidet 20 Schaden und hat noch 40 HP
Pikachu greift an
Schiggy erleidet 30 Schaden und ist kampfunfähig
Pikachu hat gewonnen
```

Bonus: Versuche doch mal, den Schaden der Attack zu verändern oder ein anderes Pokemon zuerst angreifen zu lassen. Wie verändert sich der Kampf?