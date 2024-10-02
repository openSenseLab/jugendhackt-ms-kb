---
sidebar_position: 3
sidebar_label: 3. Schaden & Heilung
---

# 3. Lösung: Schaden & Heilung

```cs
var pokemon = new Pokemon("Pikachu", 5);
Console.WriteLine($"{pokemon.Name} hat Level {pokemon.Level} und {pokemon.Hp} HP");

pokemon.TakeDamage(20);
pokemon.Heal(15);
pokemon.TakeDamage(150);

public class Pokemon
{
    private string _name;
    private int _level;
    private int _hp;

    public Pokemon(string name, int level)
    {
        _name = name;
        _level = level;
        _hp = 100;
    }
    
    public string Name => _name;
    public int Level => _level;
    public int Hp => _hp;
    
    public void TakeDamage(int damage)
    {
        _hp -= damage;
        if (_hp < 0)
        {
            _hp = 0;
            Console.WriteLine($"{_name} erleidet {damage} Schaden und ist kampfunfähig");
        }
        else
        {
            Console.WriteLine($"{_name} erleidet {damage} Schaden und hat noch {_hp} HP");
        }
    }
    
    public void Heal(int heal)
    {
        _hp += heal;
        if (_hp > 100)
        {
            _hp = 100;
        }
        
        Console.WriteLine($"{_name} wird um {heal} HP geheilt und hat nun {_hp} HP");
    }
}
```