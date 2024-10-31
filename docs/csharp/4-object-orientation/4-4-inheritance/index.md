---
sidebar_position: 4
sidebar_label: 4.4 Vererbung
---

# Vererbung

Im Kapitel über Namespaces haben wir zum Schluss kurz auf den Ordner `Animals` geschaut. Er hat zwei Klassen beinhaltet: `Dog` und `Cat`. Wenn wir beide Klassen modellieren, könnten sie so aussehen:

```cs
// Cat.cs
namespace Firststeps.Animals;
public class Cat
{
    private string _name;
    private string _color;
    private int _miceCaught;
    
    public Cat(string name, string color, int miceCaught)
    {
        _name = name;
        _color = color;
        _miceCaught = miceCaught;
    }
    
    public string Name => _name;
    public string Color => _color;
    public int MiceCaught => _miceCaught;
}
```

```cs
// Dog.cs
namespace Firststeps.Animals;
public class Dog
{
    private string _name;
    private string _color;
    private bool _canFetchSticks;
    
    public Dog(string name, string color, bool canFetchSticks)
    {
        _name = name;
        _color = color;
        _canFetchSticks = canFetchSticks;
    }
    
    public string Name => _name;
    public string Color => _color;
    public bool CanFetchSticks => _canFetchSticks;
}
```

Aus ihnen können wir Objekte bauen:

```cs
// Program.cs
using Firststeps.Animals;

var dog = new Dog("Fiffi", "grau-braun", true);
Console.WriteLine("Mein Hund heißt " + dog.Name);

var cat = new Cat("Shadow", "schwarz", 4);
Console.WriteLine("Meine Katze ist " + cat.Color);
```

Beide Klassen sehen sehr ähnlich aus. Sie haben jeweils einen Namen und eine Farbe. Bei der Katze wird aber angegeben, wie viele Mäuse sie schon gefangen hat (`miceCaught`) und beim Hund, ob er Stöckchen holen kann (`canFetchSticks`).

Diese Namen/Farbe Dopplung in beiden Klassen können wir mit Vererbung auflösen. Dazu müssen wir aber zuerst das Konzept von **Basisklassen** kennenlernen.

## Basisklassen

Basisklassen sind Klassen, die eine Anzahl an Feldern, Properties und Methoden bereitstellen, die von Subklassen durch Vererbung benutzt werden können. Was das genau bedeutet, sehen wir in den nächsten Abschnitten. In unserem Fall könnte die Basisklasse `Animal` heißen. Legen wir sie zuerst leer an:

```cs
// Animal.cs
namespace Firststeps.Animals;
public class Animal
{
}
```

Jetzt können wir der Klasse `Dog` sagen, dass sie von `Animal` erben soll, indem wir `: Animal` nach dem Klassennamen schreiben:

```cs
// Dog.cs
namespace Firststeps.Animals;
public class Dog : Animal
{
    // Rest der Klasse Dog ist gleich geblieben
}
```

Hier spricht man jetzt davon, dass Animal die **Basisklasse** und Dog die **Subklasse** ist. Ob eine Basis- und Subklasse zusammenpassen, kannst du ganz einfach durch den **"ist ein"-Test** feststellen. Wenn der Satz `<Subklasse> ist ein(e) <Basisklasse>` Sinn ergibt, passen die beiden Klassen zusammen.

In unserem Fall wäre das: `Hund ist ein Tier`. Das ist korrekt. Ein Hund ist ein Tier und daher können wir `Animal` als Basisklasse von `Dog` einsetzen. Wenn wir versuchen würden, `Dog` von `Cat` erben zu lassen, könnten wir über den Satz `Hund ist eine Katze` herausfinden, dass das falsch ist und wir das nicht tun sollten.

## Vererbung

Der Sinn hinter Vererbung ist, dass Code nur einmal in der Basisklasse (`Animal`) geschrieben werden muss und dann von vielen Subklasse (`Cat`, `Dog`, ...) verwendet werden kann, indem die Subklassen automatisch auf Code in der Basisklasse zugreifen können als wäre es ihr eigener.

`Dog` erbt nun also von `Animal`, allerdings ist die Klasse `Animal` bisher noch leer. Das ändern wir jetzt, indem wir uns fragen, welche Felder & Properties eines Hundes (`Dog`) auf alle Tiere (`Animal`) zutreffen.

- Name -> jedes (Haus)Tier hat einen Namen ✅
- Color -> jedes Tier hat eine Farbe ✅
- CanFetchSticks -> nicht für jedes Tier ist relevant, ob es Stöckchen holen kann ❌

Damit schieben wir `Name` und `Color` von der Subklasse `Dog` in die Basisklasse `Animal`:

```cs
// Animal.cs
namespace Firststeps.Animals;
public class Animal
{
    private string _name;
    private string _color;
    
    public string Name => _name;
    public string Color => _color;
}
```

```cs
// Dog.cs
namespace Firststeps.Animals;
public class Dog : Animal
{
    private bool _canFetchSticks;
    
    public Dog(string name, string color, bool canFetchSticks)
    {
        _name = name;
        _color = color;
        _canFetchSticks = canFetchSticks;
    }
    
    public bool CanFetchSticks => _canFetchSticks;
}
```

Wenn du die Klasse `Dog` wieder benutzt, um ein Objekt zu bauen und folgenden Code ausführst,

```cs
// Program.cs
using Firststeps.Animals;

var dog = new Dog("Fiffi", "grau-braun", true);
Console.WriteLine("Mein Hund heißt " + dog.Name);
```

wirst du feststellen, dass der Computer Fehler anzeigt und sagt, dass er im Konstruktor von `Dog` nicht auf `_name` und `_color` zugreifen kann. Obwohl weiter oben gesagt wurde, dass Subklassen automatisch auf den Code in der Basisklasse zugreifen können. Das ist ist generell richtig, hat aber eine Einschränkung.

## Zugriffsmodifikatoren

Wir haben den Begriff Zugriffsmodifikatoren (access modifieres) im Kapitel über Klassen bereits kennengelernt. Sie geben an, von wo aus auf Felder, Properties und Methode zugegriffen werden kann. Bisher haben wir benutzt:
- `private` -> nur in der eigenen Klasse kann darauf zugegriffen werden
- `public` -> von innerhalb und außerhalb der Klasse kann darauf zugegriffen werden.

Wenn du dir jetzt nochmal die Zugriffsmodifikatoren von `_name` und `_color` in `Animal` anschaust, wirst du verstehen, warum der Computer sagt, er kann im Konstruktor von `Dog` darauf nicht zugreifen: Beide sind `private`! Das heißt, dass nur innerhalb von `Animal` darauf zugegriffen werden kann.

Die Lösung ist jetzt aber **nicht**, die Felder `public` zu machen, sondern wir benutzen einen neuen Zugriffsmodifikator: `protected`.

`protected` bedeutet, dass auf das Feld/Property/Methode nur innerhalb der eigenen Klasse und aller Subklasse zugegriffen werden kann. Somit können die Felder von außen weiterhin nicht verändert werden, aber die Subklasse `Dog` kann mit ihnen arbeiten.

```cs
// Animal.cs
namespace Firststeps.Animals;
public class Animal
{
    protected string _name;
    protected string _color;
    
    public string Name => _name;
    public string Color => _color;
}
```

Wenn wir das Programm jetzt ausführen, bekommen wir keinen Fehler mehr und die erwartete Ausgabe auf der Konsole. Anschließen können wir die Änderungen, die wir bisher an `Dog` gemacht haben, auch auf `Cat` übertragen:

```cs
// Dog.cs
namespace Firststeps.Animals;
public class Dog : Animal
{
    private bool _canFetchSticks;
    
    public Dog(string name, string color, bool canFetchSticks)
    {
        _name = name;
        _color = color;
        _canFetchSticks = canFetchSticks;
    }
    
    public bool CanFetchSticks => _canFetchSticks;
}
```

```cs
// Cat.cs
namespace Firststeps.Animals;
public class Cat : Animal
{
    private int _miceCaught;

    public Cat(string name, string color, int miceCaught)
    {
        _name = name;
        _color = color;
        _miceCaught = miceCaught;
    }

    public int MiceCaught => _miceCaught;
}
```

## Basiskonstruktor

Das ist schon weniger Code als vorher. Damit sind wir aber noch nicht am Ende. In beiden Klassen müssen jeweils immer noch die Felder `_name` und `_color` gesetzt werden. Auch das können wir in die Basisklasse `Animal` ziehen. Schreiben wir dafür einen Konstruktor.

```cs
// Animal.cs
namespace Firststeps.Animals;
public class Animal
{
    protected string _name;
    protected string _color;
    
    public Animal(string name, string color)
    {
        _name = name;
        _color = color;
    }

    public string Name => _name;
    public string Color => _color;
}
```

Dieser Konstruktor muss anschließen aufgerufen werden. Das machen wir nicht dort, wo wir `new Dog(...)` schreiben, sondern in der Subklasse selbst. Wir fügen ein `: base(name, color)` nach den Parametern des Konstrktors in `Dog` ein.

```cs
// Dog.cs
namespace Firststeps.Animals;
public class Dog : Animal
{
    private bool _canFetchSticks;
    
    public Dog(string name, string color, bool canFetchSticks)
        : base(name, color)
    {
        _canFetchSticks = canFetchSticks;
    }
    
    public bool CanFetchSticks => _canFetchSticks;
}
```

Dadurch wird der Konstruktor in `Animal` aufgerufen wenn der Konstruktor in `Dog` aufgerufen wird.
> Es ist übrigens egal, ob `: base(name, color)` in einer neuen Zeile ist oder nicht. Schreibe es so, wie du es am besten lesen kannst / am schönsten findest.

## Instanziierung von Basisklassen verhindern

Mit der aktuellen Implementierung von `Animal` und `Dog` ist es nicht nur möglich, `Dog` zu instanziieren (= ein Objekt auf Basis der Klasse `Dog` zu erstellen):

```cs
// Program.cs
using Firststeps.Animals;
var dog = new Dog("Fiffi", "grau-braun", true); // Instanziierung
```

Es wäre auch möglich, ein `Animal`-Objekt zu bauen:

```cs
// Program.cs
using Firststeps.Animals;
var animal = new Animal("Schnuffi", "blau");
```

Wenn wir das aber auf die reale Welt beziehen, ergibt das keinen Sinn. Wir sehen Hunde und Katzen, aber nicht "Tier" rumlaufen. Daher müssen wir verhindern, dass `Animal` instanziiert werden kann. Das schaffen wir mit einem einzigen kleinen Wort: `abstract`.

`abstract` bedeutet in verschiedenen Kontexten verschiedene Dinge. Wenn wir es an eine Klasse schreiben, signalisiert es dem Computer, dass wir nicht wollen, dass aus dieser Klasse ein Objekt erstellt werden kann. Später werden wir es noch an Methoden schreiben - dort hat es aber eine andere Bedeutung.

```cs
// Animal.cs
namespace Firststeps.Animals;
public abstract class Animal //<- hier ist das abstract
{
    protected string _name;
    protected string _color;
    
    public Animal(string name, string color)
    {
        _name = name;
        _color = color;
    }

    public string Name => _name;
    public string Color => _color;
}
```

Wenn du jetzt nochmal versucht, ein `Animal`-Objekt zu erstellen, wird der Computer einen Fehler werfen mit dem Hinweis, dass er aus einem abstrakten Typen keine Instanz erstellen kann.

```cs
// Program.cs
using Firststeps.Animals;
var animal = new Animal("Schnuffi", "blau"); // Fehler
```