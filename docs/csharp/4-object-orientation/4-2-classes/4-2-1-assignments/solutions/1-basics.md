---
sidebar_position: 1
sidebar_label: 1. Grundlagen
---

# 1. Lösung: Grundlagen

```cs
var pokemon = new Pokemon("Pikachu", 5);
Console.WriteLine(pokemon.Name + " hat Level " + pokemon.Level);

public class Pokemon
{
    private string _name;
    private int _level;

    public Pokemon(string name, int level)
    {
        _name = name;
        _level = level;
    }
    
    public string Name => _name;
    public int Level => _level;
}
```