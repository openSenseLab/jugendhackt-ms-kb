---
sidebar_position: 7
sidebar_label: 5. Fakultät
---


# 5. Lösung: Fakultät

Hier benutzen wir keine feste Zahl in der Bedingung der `for`-Schleife, sondern die eingegebene Nummer. Wir machen dann jeden Schritt der Mulitplikation der Fakultät einzeln beim Durchlauf der `for`-Schleife.

Ablauf für Fakultät 5:<br/>
1.Durchlauf: product = 1 \* 1 -> product hat den neuen (und alten) Wert 1<br/>
2.Durchlauf: product = 1 \* 2 -> product hat den neuen Wert 2<br/>
3.Durchlauf: product = 2 \* 3 -> product hat den neuen Wert 6<br/>
4.Durchlauf: product = 6 \* 4 -> product hat den neuen Wert 24<br/>
5.Durchlauf: product = 24 \* 5 -> product hat den neuen Wert 120<br/>

Achtung: Wir dürfen `product` nicht mit `0` initialisieren, da sonst jede Multiplikation wieder 0 ergeben würde.

```cs
Console.Write("Gib mir eine Zahl: ");
string input = Console.ReadLine();

int number = int.Parse(input);

int product = 1;
for (int i = 1; i <= number; i++)
{
	product = product * i;
}
Console.WriteLine("Fakultät von " + number + " ist " + product);
```