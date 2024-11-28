---
sidebar_position: 1
sidebar_label: 2. Kampf erstellen
---

# 2. Lösung: Kampf erstellen

Wir erstellen eine Klasse `Fight` und übergeben ihr zwei Pokemon (`pokemonLeft` & `pokemonRight`) als Parameter im Konstruktor. Die Datentypen beider Parameter sind `Pokemon` und nicht `Pikachu` und `Schiggy`, denn so können wir theoretisch jedes beliebige Pokemon dort kämpfen lassen - einer der Kerngedanken von Polymorphismus.<br/>
Den Kampf-Code, der vorher in `Program.cs` war, schieben wir in eine Methode `Start` und erstellen kein `Pikachu` und `Schiggy` mehr, sondern benutzen `pokemonLeft` & `pokemonRight`, die im Konstruktor übergeben wurden.

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
            Console.WriteLine(_pokemonLeft.Name + " greift an"); // pokemonLeft anstatt Pikachu
            _pokemonRight.TakeDamage(_pokemonLeft.Attack.Damage); // pokemonRight anstatt Schiggy
            
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

Die `Fight`-Klasse muss jetzt noch instanziiert und ausgeführt werden. Dazu erstellen wir in `Program.cs` ein neues `Fight`-Objekt und übergeben ihm Pikachu und Schiggy als Kampfteilnehmer. Danach starten wir den Kampf über die `Start`-Methode.

```cs
// Program.cs
using ObjectOrientation.Pokemons;

Fight fight = new Fight(new Pikachu(5), new Schiggy(5));
fight.Start();
```