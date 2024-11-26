---
sidebar_position: 1
sidebar_label: Aufgaben
---

# Aufgaben

Die folgenden Aufgaben bauen auf den Aufgaben aus dem Kapitel "4.3 Namespaces" auf.

## 1. Basisklasse Pokemon

Bis jetzt haben wir immer ein Pokemon aus über die Klasse `Pokemon` instanziiert, z.B. über

```cs
var pikachu = new Pokemon("Pikachu", 5, new Attack("Donnerblitz", 30));
```
Verändere dein Projekt so, dass du eine neue Klasse `Pikachu` (im Ordner `Pokemons`) hast, die von `Pokemon` erbt und der du bei der Instanziierung nur noch das Level mitgeben musst:

```cs
var pikachu = new Pikachu(5);
```
Der Name und die Attacke Donnerblitz sollen automatisch von der neuen Klasse `Pikachu` bei der Objekterstellung an ihre Basisklasse übergeben werden.

## 2. Basisklasse Attack

Das gleiche, was wir mit `Pikachu` und `Pokemon` gemacht haben, machen wir jetzt mit `Donnerblitz` und `Attack`.

Verschiebe dazu `Attack.cs` zuerst in einen neuen Ordern `Attacks` und passe den Namespace an.

Erstelle anschließened eine neue Klasse `Donnerblitz` (in einer neuen Datei neben `Attack.cs`), die von `Attack` erbt und den Namen und Schaden bei Objekterstellung automatisch an die Basisklasse übergibt. Folgender Code soll nach deiner Implementierung möglich sein:

```cs
var donnerblitz = new Donnerblitz();
Console.WriteLine(donnerblitz.Name + " macht " + donnerblitz.Damage + " Schaden");
```

Die tatsächliche Verwedung der Donnerblitz-Klasse kommt erst im nächsten Kapitel über Polimorphismus.

## 3. Schiggy & Aquaknarre

Mache das gleiche mit Schiggy und Aquaknarre, was du in den letzten beiden Aufgaben mit `Pikachu` und `Donnerblitz` gemacht hast.

Stelle anschließend sicher, dass aus der Klasse `Pokemon` keine Objekte erstellt werden können.

Folgender Code in der `Program.cs` soll nach deiner Implementierung **nicht mehr** ausführbar sein:
```cs
Pokemon pikachu = new Pokemon("Pikachu", 5, new Attack("Donnerblitz", 30));
Pokemon schiggy = new Pokemon("Schiggy", 5, new Attack("Aquaknarre", 20));
```

Dein Code sollte stattdessen so aussehen:
```cs
Pikachu pikachu = new Pikachu(5);
Schiggy schiggy = new Schiggy(5);
```