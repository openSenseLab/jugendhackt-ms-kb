---
sidebar_position: 1
sidebar_label: 3. Zweiter Angriff
---

# 3. Lösung: Zweiter Angriff

```cs
// Attacks/Biss.cs
namespace ObjectOrientation.Attacks;

public class Biss : Attack
{
    public Biss()
        : base("Biss", 15)
    {
    }
}
```

```cs
// Attacks/Ruckzuckhieb.cs
namespace ObjectOrientation.Attacks;

public class Ruckzuckhieb : Attack
{
    public Ruckzuckhieb()
        : base("Ruckzuckhieb", 10)
    {
    }
}
```

```cs
// Pokemons/Pokemon.cs
using ObjectOrientation.Attacks;

namespace ObjectOrientation.Pokemons;

public abstract class Pokemon
{
    // Der restliche Code bleibt gleich
    private Attack _attack1;
    private Attack _attack2;

    public Pokemon(string name, int level, Attack attack1, Attack attack2)
    {
        _name = name;
        _level = level;
        _attack1 = attack1;
        _attack2 = attack2;
        _hp = 100;
    }

    public Attack Attack1 => _attack1;
    public Attack Attack2 => _attack2;
}
```

```cs
// Fight.cs
using ObjectOrientation.Pokemons;

public class Fight
{
    // Der restliche Code bleibt gleich

    public void Start()
    {        
        while (true)
        {
            Console.WriteLine(_pokemonLeft.Name + " greift an");
            _pokemonRight.TakeDamage(_pokemonLeft.Attack1.Damage); // Attack1 anstatt Attack
            
            if (_pokemonRight.Hp == 0)
            {
                Console.WriteLine(_pokemonLeft.Name + " hat gewonnen");
                break;
            }
            
            Console.WriteLine(_pokemonRight.Name + " greift an");
            _pokemonLeft.TakeDamage(_pokemonRight.Attack1.Damage); // Attack1 anstatt Attack
            
            if (_pokemonLeft.Hp == 0)
            {
                Console.WriteLine(_pokemonRight.Name + " hat gewonnen");
                break;
            }
        }
    }
}
```