---
sidebar_position: 2
sidebar_label: 3. Schiggy & Aquaknarre
---

# 3. Lösung: Schiggy & Aquaknarre

Analog zu `Pikachu` und `Donnerblitz` implementieren wir neue Klassen `Schiggy` (im Ordner Pokemons) und `Aquaknarre` im Ordner `Attacks`.

```cs
// Pokemons/Schiggy.cs
using ObjectOrientation.Attacks;

namespace ObjectOrientation.Pokemons;

public class Schiggy : Pokemon
{
    public Schiggy(int level)
        : base("Schiggy", level, new Attack("Aquaknarre", 20))
    {
    }
}
```

```cs
// Attacks/Aquaknarre.cs
namespace ObjectOrientation.Attacks;

public class Aquaknarre : Attack
{
    public Aquaknarre()
        : base("Aquaknarre", 20)
    {
    }
}
```

Um zuletzt zu verhindern, dass Objekte aus der Klasse `Pokemon` erstellt werden, fügen wir das Schlüsselwort `abstract` zur Signatur der Klasse hinzu

```cs
// Pokemons/Pokemon.cs
using ObjectOrientation.Attacks;

namespace ObjectOrientation.Pokemons;

public abstract class Pokemon // Die Klasse ist jetzt 'abstract'
{
    // Rest der Klasse bleibt gleich
}
```