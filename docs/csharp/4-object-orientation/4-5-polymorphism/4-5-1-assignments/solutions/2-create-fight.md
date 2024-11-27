---
sidebar_position: 1
sidebar_label: 2. Kampf erstellen
---

# 2. Lösung: Kampf erstellen

```cs
// Fight.cs
using ObjectOrientation.Pokemons;

public class Fight
{
    private readonly Pokemon _pokemonLeft;    
    private readonly Pokemon _pokemonRight;    

    public Fight(Pokemon pokemonLeft, Pokemon pokemonRight)
    {
        _pokemonLeft = pokemonLeft;
        _pokemonRight = pokemonRight;
    }
    
    public void Start()
    {        
        while (true)
        {
            Console.WriteLine(_pokemonLeft.Name + " greift an");
            _pokemonRight.TakeDamage(_pokemonLeft.Attack.Damage);
            
            if (_pokemonRight.Hp == 0)
            {
                Console.WriteLine(_pokemonLeft.Name + " hat gewonnen");
                break;
            }
            
            Console.WriteLine(_pokemonRight.Name + " greift an");
            _pokemonLeft.TakeDamage(_pokemonRight.Attack.Damage);
            
            if (_pokemonLeft.Hp == 0)
            {
                Console.WriteLine(_pokemonRight.Name + " hat gewonnen");
                break;
            }
        }
    }
}
```

```cs
// Program.cs
using ObjectOrientation.Pokemons;

var fight = new Fight(new Pikachu(5), new Schiggy(5));
fight.Start();
```