---
sidebar_position: 1
sidebar_label: 4. Angriffe auswählen
---

# 4. Lösung: Angriffe auswählen

Zuerst implementieren wir die in der Aufgabenstellung angegebenen Methoden in der Klasse `Pokemon`.

`PrintAttack` gibt über zwei `Console.WriteLine` die beiden vorhandenen Angriffe aus

`GetAttack` prüft, ob der Wert im Parameter `attackNumber` 1 ist. Wenn ja, wird der erste Angriff zurückgegeben. Ansonsten der zweite. Das lässt zwar die Möglichkeite, dass z.B. 3 übergeben wird und wir trotzdem den zweiten Angriff bekommen, aber mit fehlerhafter Eingabe beschäftigen wir uns später.

`Attack` holt sich über den Parameter `attackNumber` zuerst den tatsächlichen Angiff und fügt dann dem angegriffenen `pokemon` über `TakeDamage` den Schaden des Angriffs zu.

```cs
// Pokemons/Pokemon.cs
using ObjectOrientation.Attacks;

namespace ObjectOrientation.Pokemons;

public abstract class Pokemonc
{
    // Der restliche Code bleibt gleich
    
    public void PrintAttacks()
    {
        Console.WriteLine("[1] " + _attack1.Name);
        Console.WriteLine("[2] " + _attack2.Name);
    }
    
    public Attack GetAttack(int attackNumber)
    {
        if(attackNumber == 1)
            return Attack1;
        else
            return Attack2;
    }
    
    public void Attack(Pokemon pokemon, int attackNumber)
    {
        var attack = GetAttack(attackNumber);
        Console.WriteLine(Name + " greift " + pokemon.Name + " mit " + attack.Name + " an");
        pokemon.TakeDamage(attack.Damage);
    }
}
```

Da das Auswählen des Angriffs für beide Pokemon im Kampf gleich ist, wurde dieser Code in eine `ChooseAttack`-Methode ausgelagert. Dadurch muss er nicht zweimal in `Start` geschrieben werden.<br/>
Nach der Ausgabe der verfügbaren Angriffe des Pokemon, warten wir auf die Eingabe der SpielerIn, welchen Angriff er/sie ausführen will und wandeln den erhaltenen `string` in ein `int` um (da wir den Angriff in `GetAttack` über ein `int` ermitteln).

Sobald wird die Nummer des Angriffs haben, können wir `Attack` aufrufen. Das Pokemon, auf dem die Methode aufgerufen wird, greift das übergeben Pokemon an.

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
            int pokemonLeftAttackNumber = ChooseAttack(_pokemonLeft); // Auswählen des Angriffs
            _pokemonLeft.Attack(_pokemonRight, pokemonLeftAttackNumber); // _pokemonLeft greift _pokemonRight an
            Console.WriteLine();
            
            if (_pokemonRight.Hp == 0)
            {
                Console.WriteLine(_pokemonLeft.Name + " hat gewonnen");
                break;
            }
            
            Console.WriteLine(_pokemonRight.Name + " ist and der Reihe:");
            int pokemonRightAttackNumber = ChooseAttack(_pokemonRight); // Auswählen des Angriffs
            _pokemonRight.Attack(_pokemonLeft, pokemonRightAttackNumber); // _pokemonRight greift _pokemonLeft an
            Console.WriteLine();
            
            if (_pokemonLeft.Hp == 0)
            {
                Console.WriteLine(_pokemonRight.Name + " hat gewonnen");
                break;
            }
        }
    }
    
    private int ChooseAttack(Pokemon pokemon)
    {
        pokemon.PrintAttacks(); // verfügbare Angriffe ausgeben
        Console.Write("Welche Attacke soll eingesetzt werden? ");
        string attackNumberInput = Console.ReadLine(); // Auslesen der SpielerInnen Eingabe
        return int.Parse(attackNumberInput);  
    }
}
```