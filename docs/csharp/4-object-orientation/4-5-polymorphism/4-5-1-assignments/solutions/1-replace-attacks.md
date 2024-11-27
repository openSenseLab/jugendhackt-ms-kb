---
sidebar_position: 1
sidebar_label: 1. Angriffe ersetzen
---

# 1. Lösung: Angriffe ersetzen


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

```cs
namespace ObjectOrientation.Attacks;

public abstract class Attack // Klasse ist jetzt 'abstract'
{
    // Der restliche Code bleibt gleich
}
```