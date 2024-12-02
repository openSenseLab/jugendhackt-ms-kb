---
sidebar_position: 1
sidebar_label: 1. Angriffe ersetzen
---

# 1. Lösung: Angriffe ersetzen

In den Klassen `Pikachu` und `Schiggy` wird beim Aufruf des Basis-Konstruktors ein Angriff (`new Attack(...)`) erstellt. Dieses `Attack`-Objekt muss durch die konkrete Angriffsklasse (`Donnerblitz` für Pikachu, `Aquaknarre` für Schiggy) ausgetauscht werden. Da der Schaden innerhalb der jeweiligen Klasse definiert wird, muss kein Argument beim Erstellen des Angriffs übergeben werden.

```cs
using ObjectOrientation.Attacks;

namespace ObjectOrientation.Pokemons;

public class Pikachu : Pokemon
{
    public Pikachu(int level)
        : base("Pikachu", level, new Donnerblitz())
    {
    }
}
```

```cs
using ObjectOrientation.Attacks;

namespace ObjectOrientation.Pokemons;

public class Schiggy : Pokemon
{
    public Schiggy(int level)
        : base("Schiggy", level, new Aquaknarre())
    {
    }
}
```

Um weiterhin zu verhindern, dass direkt Objekte der `Attack`-Klasse erstellt werden, machen wir sie `abstract`.

```cs
namespace ObjectOrientation.Attacks;

public abstract class Attack // Klasse ist jetzt 'abstract'
{
    // Der restliche Code bleibt gleich
}
```