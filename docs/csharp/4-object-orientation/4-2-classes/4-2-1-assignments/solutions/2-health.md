---
sidebar_position: 2
sidebar_label: 2. Gesundheit
---

# 2. Lösung: Gesundheit

Da wir im Konstruktor beliebigen Code ausführen können, setzen wir dort ein neues Feld `_hp` auf 100.

```cs
var pokemon = new Pokemon("Pikachu", 5);
Console.WriteLine(pokemon.Name + " hat Level " + pokemon.Level + " und " + pokemon.Hp + " HP");

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
}
```