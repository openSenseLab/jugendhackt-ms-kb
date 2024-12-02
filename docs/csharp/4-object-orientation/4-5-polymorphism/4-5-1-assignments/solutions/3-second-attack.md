---
sidebar_position: 1
sidebar_label: 3. Zweiter Angriff
---

# 3. Lösung: Zweiter Angriff

Analog zu `Donnerblitz` und `Aquaknarre` erstellen wir zwei Klassen `Biss` und `Ruckzuckhieb` im `Attacks`-Ordner.

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

Außerdem wird das Feld `_attack` in `_attack1`, das Property `Attack` in `Attack1` und der Konstruktor-Parameter `attack` in `attack1` umbenannt.<br/>
Das erlaubt uns, einen zweiten Angriff einzuführen.

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

Dieser zweite Angriff muss für `Pikachu` und `Schiggy` beim Aufruf des Basis-Konstruktors mit den vorher erstellen Klassen gefüllt werden.

```cs
using ObjectOrientation.Attacks;

namespace ObjectOrientation.Pokemons;

public class Pikachu : Pokemon
{
    public Pikachu(int level)
        : base("Pikachu", level, new Donnerblitz(), new Ruckzuckhieb()) // Ruckzuckhieb als zweiter Angriff
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
        : base("Schiggy", level, new Aquaknarre(), new Biss()) // Biss als zweiter Angriff
    {
    }
}
```

Noch wirft der Code aber Fehler, denn in der `Fight`-Klasse wird weiterhin auf das `Attack`-Property der `Pokemon` zugegriffen. Das müssen wir vorerst in `Attack1` umbennenen. Die Benutzung des zweiten Angriffs kommt in der nächsten Aufgabe.

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