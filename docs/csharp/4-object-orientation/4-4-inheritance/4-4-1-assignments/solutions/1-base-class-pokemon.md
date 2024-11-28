---
sidebar_position: 1
sidebar_label: 1. Basisklasse Pokemon
---

# 1. Lösung: Basisklasse Pokemon

Für's erste fassen wir die Klasse `Pokemon` nicht an und erstellen im Ordner `Pokemons` nur eine neue Datei `Pikachu.cs`. Da der Name und die Attacke für Pikachu gleich bleiben, können wir sie hier im Aufruf an den Konstruktor der Basisklasse übergeben.<br/>
Vergiss nicht, den Namespace zu setzen.

```cs
// Pokemons/Pikachu.cs
namespace ObjectOrientation.Pokemons;

public class Pikachu : Pokemon
{
    public Pikachu(int level)
        : base("Pikachu", level, new Attack("Donnerblitz", 30))  // hier rufen wir den Konstruktor von 'Pokemon' auf
    {
    }
}
```