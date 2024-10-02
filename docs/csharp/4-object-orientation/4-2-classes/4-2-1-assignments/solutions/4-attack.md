---
sidebar_position: 4
sidebar_label: 4. Angriff
---

# 4. Lösung: Angriff

Wir erstellen das `Attack`-Objekt direkt beim `Pokemon`-Konstruktor-Aufruf. Es wäre natürlich auch möglich, die Attacke vorher in einer eigenen Variable zu speichern und diese dann in den `Pokemon`-Konstruktor zu geben.

```cs
var pokemon = new Pokemon("Pikachu", 5, new Attack("Donnerblitz", 30));
Console.WriteLine(pokemon.Name + " hat Level " + pokemon.Level + " und " + pokemon.Hp + " HP");
Console.WriteLine(pokemon.Name + " beherrscht " + pokemon.Attack.Name + ", das " + pokemon.Attack.Damage + " Schaden anrichtet");

public class Pokemon
{
    private string _name;
    private int _level;
    private int _hp;
    private Attack _attack;

    public Pokemon(string name, int level, Attack attack)
    {
        _name = name;
        _level = level;
        _attack = attack;
        _hp = 100;
    }
    
    public string Name => _name;
    public int Level => _level;
    public int Hp => _hp;
    public Attack Attack => _attack;
    
    public void TakeDamage(int damage)
    {
        _hp -= damage;
        if (_hp < 0)
        {
            _hp = 0;
            Console.WriteLine(_name + " erleidet " + damage + " Schaden und ist kampfunfähig");
        }
        else
        {
            Console.WriteLine(_name + " erleidet " + damage + " Schaden und hat noch " + _hp + " HP");
        }
    }
    
    public void Heal(int heal)
    {
        _hp += heal;
        if (_hp > 100)
        {
            _hp = 100;
        }
        
        Console.WriteLine(_name + " wird um " + heal + " HP geheilt und hat nun " + _hp + " HP");
    }
}

public class Attack
{
    private string _name;
    private int _damage;

    public Attack(string name, int damage)
    {
        _name = name;
        _damage = damage;
    }
    
    public string Name => _name;
    public int Damage => _damage;
}
```