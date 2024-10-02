---
sidebar_position: 5
sidebar_label: 5. Der erste Kampf
---

# 5. Lösung: Der erste Kampf

Die `Pokemon` und `Attack` Klassen wurden hier weggelassen, da sie sich zur vorherigen Aufgabe nicht geändert haben.

```cs
var pikachu = new Pokemon("Pikachu", 5, new Attack("Donnerblitz", 30));
var schiggy = new Pokemon("Schiggy", 5, new Attack("Aquaknarre", 20));

while (true)
{
    Console.WriteLine(pikachu.Name + " greift an");
    schiggy.TakeDamage(pikachu.Attack.Damage);
    
    if (schiggy.Hp == 0)
    {
        Console.WriteLine(pikachu.Name + " hat gewonnen");
        break;
    }
    
    Console.WriteLine(schiggy.Name + " greift an");
    pikachu.TakeDamage(schiggy.Attack.Damage);
    
    if (pikachu.Hp == 0)
    {
        Console.WriteLine(schiggy.Name + " hat gewonnen");
        break;
    }
}
```