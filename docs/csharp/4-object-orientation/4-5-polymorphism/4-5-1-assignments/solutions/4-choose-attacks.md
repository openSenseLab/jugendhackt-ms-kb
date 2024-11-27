---
sidebar_position: 1
sidebar_label: 4. Angriffe auswählen
---

# 4. Lösung: Angriffe auswählen

```cs
// Pokemons/Pokemon.cs
using ObjectOrientation.Attacks;

namespace ObjectOrientation.Pokemons;

public abstract class Pokemon
{
    // Der restliche Code bleibt gleich
    
    public void PrintAttacks()
    {
        Console.WriteLine("[1] " + _attack1.Name);
        Console.WriteLine("[2] " + _attack2.Name);
    }
    
    public void Attack(Pokemon pokemon, Attack attack)
    {
        Console.WriteLine(Name + " greift " + pokemon.Name + " mit " + attack.Name + " an");
        pokemon.TakeDamage(attack.Damage);
    }
    
    public Attack GetAttack(int attackNumber)
    {
        if(attackNumber == 1)
            return Attack1;
        else
            return Attack2;
    }
}
```

```cs
// Fight.cs
using ObjectOrientation.Attacks;
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
            Console.WriteLine(_pokemonLeft.Name + " ist and der Reihe:");
            var pokemonLeftAttack = ChooseAttack(_pokemonLeft);
            _pokemonLeft.Attack(_pokemonRight, pokemonLeftAttack);
            Console.WriteLine();
            
            if (_pokemonRight.Hp == 0)
            {
                Console.WriteLine(_pokemonLeft.Name + " hat gewonnen");
                break;
            }
            
            Console.WriteLine(_pokemonRight.Name + " ist and der Reihe:");
            var pokemonRightAttack = ChooseAttack(_pokemonRight);
            _pokemonRight.Attack(_pokemonLeft, pokemonRightAttack);
            Console.WriteLine();
            
            if (_pokemonLeft.Hp == 0)
            {
                Console.WriteLine(_pokemonRight.Name + " hat gewonnen");
                break;
            }
        }
    }
    
    private Attack ChooseAttack(Pokemon pokemon)
    {
        pokemon.PrintAttacks();
        Console.Write("Welche Attacke soll eingesetzt werden? ");
        var attackNumberInput = Console.ReadLine();
        var attackNumber = int.Parse(attackNumberInput);
        return pokemon.GetAttack(attackNumber);        
    }
}
```