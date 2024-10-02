---
sidebar_position: 2
sidebar_label: 4.1 Klassen
---

# Klassen

Klassen sind einer der wichtigsten Grundbestandteile Objekt-orientierter Programmierung, denn Objekte werden aus Klassen erschaffen. Sehen wir uns ein einfaches Beispiel an:

```cs
public class Person
{

}
```

Hier haben wir eine Klasse `Person`, die jetzt noch leer ist, aber in den folgenden Abschnitten gefüllt wird. Sie soll eine Person repräsentieren.

Schauen wir uns aber zunächst die erste Zeile an: `public class Person`

- `public` ist der Zugriffsmodifikator (access modifier), der angibt von wo aus auf die Klasse zugegriffen werden kann. Aktuell ist er noch nicht wichtig, es gibt aber z.B. noch `private`.
- `class` gibt an, dass die Struktur, die wir dort aufbauen eine Klasse ist
- `Person` ist der Name der Klasse. Er wird später benötigt, um ein Objekt aus der Klasse zu erstellen.

Alles, was in den geschweiften Klammern nach `public class Person` kommt, gehört zu der Klasse.

Du kannst dir eine Klasse wie einen Bauplan vorstellen. Mit der Klasse an sich kannst du nicht viel machen, genauso wie du in einem Bauplan eines Hauses nicht wohnen kannst. Aber sobald jemand auf Basis des Bauplans ein Haus baut, kannst du dort einziehen. Und genau das machen wir jetzt im Code. Mit dem Schlüsselwort (keyword) `new` können wir aus einer Klasse ein Objekt bauen.

```cs
Person person = new Person();
```

Dadurch haben wir eine Variable vom Typ `Person`. Sie enthält eine sogenannte Instanz (ein Objekt) der Klasse Person.<br/>
Noch können wir mit dem Objekt aber nicht viel machen, da die Klasse noch leer ist. Lass uns der Person einen Namen geben. Um das zu tun, müssen wir verstehen, wie ein Objekt erzeugt wird.

## Konstruktor

Objekte werden durch einen sogenannten "Konstruktor" erzeugt. Der Code `new Person()` ruft diesen Konstruktor auf, der sich innerhalb der Klasse `Person` befindet. Da unsere Klasse aber leer ist, hat der Computer im Hintergrund (ohne dass du es siehst) automatisch einen erstellt, denn jede Klasse muss einen Konstruktor haben. Wir können ihn aber auch selbst schreiben:

```cs
public class Person
{
    public Person(string name)
    {
        Console.WriteLine("Person " + name + " wird erstellt!");
    }
}
```

Der Konstruktor sieht ein bisschen aus wie eine Methode. Er hat wie die Klasse den Zugriffsmodifikator `public` (ignorieren wir vorerst), gefolgt von dem Namen der Klasse und Parametern in runden Klammern. Innerhalb des Konstruktors kann dann beliebiger Code ausgeführt werden. Hier geben wir nur eine kurze Meldung auf der Konsole aus.

Wenn du nun aber nochmal versuchst, `Person person = new Person();` auszuführen, wirst du feststellen, dass der Computer einen Fehler wirft und das Programm nicht ausführt. Das liegt daran, dass der Konstruktor jetzt einen Parameter hat, der zwingend gefüllt werden muss. Sobald wir unseren Code wie folgt ändern und einen Namen an den Konstruktor übergeben, wird das Programm ausgeführt und sollte auf der Konsole die Meldung zur Erstellung ausgeben.

```cs
Person person = new Person("Tom");
```

## Felder

Damit können wir der Person nun einen Namen geben. Allerdings können wir weiterhin nicht viel anderes mit dem Objekt anstellen. Das wird sich auch in diesem Abschnitt nicht ändern, denn zuerst müssen wir den Namen der Person speichern.<br/>
Wenn du in den Konstruktor schaust, geben wir den Namen auf der Konsole aus, aber danach ist er weg. Es wird nichts weiter mit ihm im Konstruktor gemacht. Das ändern wir jetzt mit Feldern. Ein Feld (field) ist gewissermaßen eine Variable, die in der ganzen Klasse zugänglich ist. Normalerweise fängt ihr Name mit einem Unterstrich an.

```cs
public class Person
{
    private string _name;

    public Person(string name, int age)
    {
        Console.WriteLine("Person " + name + " wird erstellt!");
        _name = name;
    }
}
```

`private string _name;` ist unser Feld. `string` ist der Datentyp und `_name` der Name des Felds. `private` ist der Zugriffsmodifikator und wird hier für uns zum ersten Mal relevant. Während die Klasse und ihr Konstruktor noch den Zugriffsmodifikator `public` haben, ist bei Feldern wichtig, dass sie `private` sind. Das bedeutet nämlich, dass außerhalb der Klasse nicht darauf zugegriffen werden kann. Um das zu verdeutlichen, schauen wir uns an, was passiert, wenn wir `private` zu `public` machen und unser Feld als `public string _name;` definiert ist. Dann wäre folgender Code möglich:

```cs
Person person = new Person("Tom");
person._name = "Dilara";
```

Wir können von außen auf das Feld in der Klasse zugreifen, den Inhalt ändern und dadurch Tom einfach zu Dilara machen. Das ist aber nicht im Sinne der Klasse, die keine direkte Veränderung an den Feldern von außen zulassen will, weil sie dadurch nicht mehr die Kontrolle über den Inhalt hat. Sobald wir das Feld wieder zurück auf `private` stellen, wirft der Code `person._name = "Dilara";` einen Fehler.

Das bedeutet allerdings, dass wir auch nicht lesend auf das Feld zugreifen können, wenn wir den Namen der Person wissen wollen, z.B.

```cs
Person person = new Person("Tom", 16);
Console.WriteLine("Die Person heißt " + person._name); // Fehler
```

Auch dieser Code kann durch das private Feld nicht ausgeführt werden. Hierfür gibt es aber eine Lösung: Eigenschaften.

## Eigenschaften

Eigenschaften (properties) sind sehr vielfältig und man kann unfassbar viele und komplexe Sachen mit ihnen machen. Wir beschränken uns aber für den Anfang darauf, den Wert von Feldern zurückzugeben.

```cs
public class Person
{
    private string _name;

    public Person(string name)
    {
        _name = name;
    }

    public string Name => _name;
}
```

In der letzten Zeile der Klasse findest du das Property (`public string Name => _name;`). Die Syntax ist ähnlich zum Feld, aber endet in einem Pfeil `=>` und dem Namen des Feldes `_name`. Und dieses Mal kann der Zugriffsmodifikator `public` sein. Denn das einzige, was du hier machen kannst, ist lesen. Aber nicht schreiben. Sehen wir uns das nochmal an. Folgender Code funktioniert weiterhin nicht:

```cs
Person person = new Person("Tom");
person.Name = "Dilara"; // Fehler
```

Wir können also den Namen der Person nicht ändern. Allerdings können wir ihn korrekt auslesen:

```cs
Person person = new Person("Tom");
Console.WriteLine("Die Person heißt " + person.Name);
```

## Methoden

Eigentlich haben wir in der vorherigen Einheit Methoden bereits besprochen, aber außerhalb von Klassen. Methoden kommen in den meisten Fällen aber innerhalb von Klassen vor und sehen dort etwas anders aus. Lass uns `Person` so erweitern, dass bei der Objekterstellung auch ein Alter in den Konstruktor mitgegeben werden muss.

```cs
var tom = new Person("Tom", 14);

public class Person
{
    private string _name;
    private int _age;

    public Person(string name, int age)
    {
        _name = name;
        _age = age;
    }

    public string Name => _name;
    public int Age => _age;
}
```

Da wir außerhalb der Klasse das Alter von Tom nicht ändern können, muss die Klasse eine Methode bereitstellen, die das kann. Wir bauen eine `CelebrateBirthday` Methode, die aufgerufen werden kann, wenn die Person Geburtstag hat. Dadurch können wir kontrollieren, dass nicht ein beliebiges Alter gesetzt wird, sondern immer nur um 1 erhöht wird.

```cs
var tom = new Person("Tom", 14);
Console.WriteLine("Tom ist " + tom.Age + " Jahre alt");

tom.CelebrateBirthday();
Console.WriteLine("Tom ist " + tom.Age + " Jahre alt");

public class Person
{
    private string _name;
    private int _age;

    public Person(string name, int age)
    {
        _name = name;
        _age = age;
    }

    public string Name => _name;
    public int Age => _age;

    public void CelebrateBirthday()
    {
        _age++;
    }
}
```

Die `CelebrateBirthday` Methode sieht fast so aus wie die Methoden, die wir bisher kennengelernt haben. Allerdings beginnt die Signatur mit einem Zugriffsmodifikator (hier `public`). Dieser gibt an, von wo die Methode aufgerufen werden kann. `public` bedeutet, dass sie von außerhalb der Klasse (z.B. `tom.CelebrateBirthday();`) aufgerufen werden kann. `private` würde bedeuten, dass sie nur innerhalb der Klasse (z.B. von einer anderen Methode oder dem Konstruktor aus) aufgerufen werden kann.

## Zweites Beispiel

Sehen wir uns noch ein anderes Beispiel an, in dem wir ein Fahrrad modellieren.

```cs
public class Bicycle
{
    private string _color;
    private bool _isElectrical;

    public Bicycle(string color, bool isElectrical)
    {
        _color = color;
        _isElectrical = isElectrical;
    }

    public string Color => _color;
    public bool IsElectrical => _isElectrical;

    public void InstallEngine()
    {
        _isElectrical = true;
    }
    
    public void RemoveEngine()
    {
        _isElectrical = false;
    }
    
    public void Paint(string color)
    {
        _color = color;
    }
}
```

Das Fahrrad hat eine Farbe (`_color`) und ein Feld, das angibt, ob es ein E-Bike ist (`_isElectrical`). Wir können aus dem Fahrrad ein E-Bike machen, indem wir einen Motor einbauen (`InstallEngine`), oder aus einem E-Bike ein normales Fahrrad machen, indem wir den Motor ausbauen (`RemoveEngine`).

```cs
var bike = new Bicycle("blau", false);
Console.WriteLine("IsElectrical: " + bike.IsElectrical);

bike.InstallEngine();
Console.WriteLine("IsElectrical: " + bike.IsElectrical);
```

Außerdem haben wir die Möglichkeit, das Fahrrad neu anzumalen (`Paint`).

```cs
var bike = new Bicycle("blau", false);
Console.WriteLine("Farbe: " + bike.Color);

bike.Paint("rot");
Console.WriteLine("Farbe: " + bike.Color);
```