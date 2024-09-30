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

Auch dieser Code kann durch das private Feld nicht ausgeführt werden. Hierfür gibt es aber eine Lösung: Eigenschaften

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