---
sidebar_position: 1
sidebar_label: 1. Klassen auslagern
---

# 1. Lösung: Klassen auslagern

Die Klasse `Attack` liegt auf der obersten Ebene des Projekts neben `Project.cs` in einer Datei `Attack.cs`. Da sie in keinem weiteren Unterordern liegt, bekommt sie nur den Namespace `ObjectOrientation` (der Projektname).

```cs
// Attack.cs
namespace ObjectOrientation;

public class Attack
{
    // Inhalt hier weggelassen, da er sich nicht verändert hat
}
```

Für die Klasse `Pokemon` erstellen wir einen neuen Unterordner `Pokemons`. Daher bekommt die Datei auch den Namespace `ObjectOrientation.Pokemons`.

```cs
// Pokemons/Pokemon.cs
namespace ObjectOrientation.Pokemons;

public class Pokemon
{
    // Inhalt hier weggelassen, da er sich nicht verändert hat
}
```

Mit den Klassen in neuen Namespaces, bedeutet das, dass die `Program.cs` nicht mehr einfach auf beide zugreifen kann. Wir müssen die Namespaces oben in `Program.cs` über `using ...` importieren, damit das wieder funktioniert. Die Reihenfolge der `using` ist nicht relevant.

```cs
// Program.cs
using ObjectOrientation;
using ObjectOrientation.Pokemons;

var pikachu = new Pokemon("Pikachu", 5, new Attack("Donnerblitz", 30));
var schiggy = new Pokemon("Schiggy", 5, new Attack("Aquaknarre", 20));

// Weiterer Inhalt hier weggelassen, da er sich nicht verändert hat
```