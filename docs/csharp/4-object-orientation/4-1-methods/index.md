---
sidebar_position: 1
sidebar_label: 4.1 Methoden
---

# Methoden

Bevor wir uns mit Klassen beschäftigen können, müssen wir verstehen, was Methoden sind, wie sie funktionieren und warum man sie überhaupt braucht.

Du hast Methoden bereits gesehen und sogar selbst benutzt. `Parse` aus `int.Parse(...)` ist eine Methode, sowie auch `WriteLine` aus `Console.WriteLine(...)`.<br/>
Methoden helfen dir zum einen, Code mehrfach auszuführen, ohne ihn mehrmals zu schreiben, und zum anderen, Code besser zu struktieren und übersichtlicher zu machen. Hier ein kleines Beispiel.

```cs
// information Alice
var studentName1 = "Alice";
var studentAge1 = 15;
var studentGrade1 = 2.0;

Console.WriteLine("Student Name: " + studentName1);
Console.WriteLine("Student Age: " + studentAge1);
Console.WriteLine("Student Grade: " + studentGrade1);

// information Bob
var studentName2 = "Bob";
var studentAge2 = 13;
var studentGrade2 = 3.8;

Console.WriteLine("Student Name: " + studentName2);
Console.WriteLine("Student Age: " + studentAge2);
Console.WriteLine("Student Grade: " + studentGrade2);
```

In obigem Code siehst du, dass die Informationen von zwei SchülerInnen ausgegeben werden. Jeweils der Name, das Alter und den Notendurchschnitt von Alice und Bob. Es ist aber sehr viel Code für die wenigen Informationen. Mit einer Methode, die die Ausgabe übernimmt, könnten wir das vereinfachen. Fangen wir mit der Konsolenausgabe an.

```cs
// information Alice
var studentName1 = "Alice";
var studentAge1 = 15;
var studentGrade1 = 2.0;

PrintStudent(studentName1, studentAge1, studentGrade1); // Aufruf 1

// information Bob
var studentName2 = "Bob";
var studentAge2 = 13;
var studentGrade2 = 3.8;

PrintStudent(studentName2, studentAge2, studentGrade2); // Aufruf 2

// Neue Methode "PrintStudent"
void PrintStudent(string name, int age, double grade)
{
    Console.WriteLine("Student Name: " + name);
    Console.WriteLine("Student Age: " + age);
    Console.WriteLine("Student Grade: " + grade);
} 
```

Analysieren wir mal, was hier passiert ist. Wir haben alle `Console.WriteLine` in eine Methode `PrintStudent` gezogen, um sie weiter oben durch `PrintStudent(...)` zweimal aufzurufen. Durch einen Methodenaufruf wird der Code in der Methode ausgeführt. Nachdem das geschehen ist, macht der Computer mit dem normalen Code nach dem Methodenaufruf weiter.

## Aufbau

Wie du oben vielleicht schon gesehen hast, besteht eine Methode aus vielen Teilen. Die erste Zeile (`void PrintStudent(string name, int age, double grade)`) nennt man Signatur. Sie enthält die wichtigsten Informationen über die Methode:

- `void` ist der Rückgabetyp (return type). Er gibt an, was für einen Datentyp unsere Methode zurückgibt. In diesem Fall gibt unsere Methode nichts zurück, daher wird `void` benutzt (void ist Englisch für "leer"). Wenn unsere Methode ein `int` zurückgeben würde, würden wir hier `int` schreiben. Weiter unten findest du dazu Beispiele.
- `PrintStudent` ist der Name der Methode. Er wird benutzt, um die Methode aufzurufen.
- `string name`, `int age` & `double grad` sind Parameter. Sie müssen beim Aufruf der Methode gefüllt werden und können dann in der Methode wie Variablen verwendet werden. Mehr dazu im nächsten Abschnitt. 

## Aufruf

Außerhalb von Klassen werden Methoden aufgerufen, indem man ihren Namen gefolgt von runden Klammern schreibt.

```cs
Print8();

void Print8()
{
    Console.WriteLine("8");
}
```

Falls die Methode Parameter hat, müssen innerhalb der runden Klammern Argumente übergeben werden, die der Computer in die Parameter der Methode automatisch einsetzt.

```cs
Print("hi"); // "hi" ist das Argument

void Print(string text) // 'text' ist der Parameter
{
    // hier kann 'text' wie eine Variable verwendet werden
    Console.WriteLine(text);
}
```

In diesem Beispiel ist `"hi"` das Argument und `string text` der Parameter. Sobald der Code ausgeführt wird, setzte der Computer den string `"hi"` in `text` ein. Anschließend wird der Code in der Methode `Print` ausgeführt.

Wichtig ist, dass die Datentypen der Argumente beim Aufruf mit den Datentypen der Parameter übereinstimmen. Man kann zum Beispiel keine `int` Argument in einen `string` Parameter einsetzen. Welches Argument in welchen Parameter eingesetzt wird, bestimmt die Reihenfolge.

## Rückgabe

Wie bereits beschrieben, können Methoden auch Werte zurückgeben. 'Zurückgeben' heißt, dass das Ergebnis der Methode in einer Variable gespeichert werden kann.

```cs
int result = Add(3, 5); // 'Add' gibt eine Zahl zurück, die wir in 'result' speichern
Console.WriteLine(result);

int Add(int number1, int number2)
{
    // Was nach 'return' kommt, wird als Ergebnis der Methode zurückgegeben
    return number1 + number2;
}
```

Hier haben wir eine Methode `Add`, die die beiden Parameter `number1` und `number2` addiert und das Ergebnis zurückgibt. 
Daher hat sie ein `int` als Rückgabetyp. Entsprechend muss der Rückgabetyp `string` sein, wenn die Methode einen `string` zurückgibt.

```cs
string text = GetHi();
Console.WriteLine(text);

string GetHi()
{
    return "hi";
}
```

In bisherigen Aufgaben hat `return` immer das Programm beendet. Innerhalb von Methoden wird `return` allerdings benutzt, um einen Wert an den Aufrufer zurückzugeben & dadurch die Methode zu beenden (aber nicht das ganze Programm).<br/> Durch eine Zuweisung zu einer Variable (z.B. `var text = GetHi();`) kann der Rückgabewert dann in einer Variable gespeichert und weiterbenutz werden.

## Ausführung

Bisher haben wir immer gesagt, dass Code von oben nach unten ausgeführt wird. Das ist auch weiterhin so, allerdings ist es wichtig zu wissen, dass Methoden nicht ausgeführt werden, nur weil sie im Code stehen. In folgendem Beispiel wird die Methode `GetHi` niemals aufgerufen und dadurch auch nicht ausgeführt.

```cs
Console.WriteLine("Moin");

string GetHi()
{
    return "hi";
}
```

Es ist außerdem auch nicht wichtig, wo eine Methode steht. Sie kann am Anfang, Ende oder mitten im Code stehen. Allerdings solltest du darauf achten, dass du durch die Platzierung der Methode den Code weiterhin gut lesen kannst. Folgendes Programm ist somit ebenfalls valide:

```cs
int Add(int number1, int number2)
{
    return number1 + number2;
}

int result = Add(3, 5);
Console.WriteLine(result);
```

## Vereinfachung

Kommen wir zu unserem Ausgangsbeispiel zurück.

```cs
// information Alice
var studentName1 = "Alice";
var studentAge1 = 15;
var studentGrade1 = 2.0;

PrintStudent(studentName1, studentAge1, studentGrade1); // Aufruf 1

// information Bob
var studentName2 = "Bob";
var studentAge2 = 13;
var studentGrade2 = 3.8;

PrintStudent(studentName2, studentAge2, studentGrade2); // Aufruf 2

// Neue Methode "PrintStudent"
void PrintStudent(string name, int age, double grade)
{
    Console.WriteLine("Student Name: " + name);
    Console.WriteLine("Student Age: " + age);
    Console.WriteLine("Student Grade: " + grade);
} 
```

Durch das Erstellen der `PrintStudent` Methode haben wir nicht mehr 6 mal `Console.WriteLine` im Code stehen, sondern nur noch dreimal. Und wir können noch weiter vereinfachen, indem wir die Variablen entfernen und die festen Werte direkt als Argumente in den Methodenaufruf einsetzen.

```cs
PrintStudent("Alice", 15, 2.0);
PrintStudent("Bob", 13, 3.8);

void PrintStudent(string name, int age, double grade)
{
    Console.WriteLine("Student Name: " + name);
    Console.WriteLine("Student Age: " + age);
    Console.WriteLine("Student Grade: " + grade);
}
```
Das sieht doch schon viel schöner und lesbarer aus als der Code, mit dem wir gestartet sind.