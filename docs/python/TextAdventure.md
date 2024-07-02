---
sidebar_position: 2
---

# Retro-Game in Python programmieren
## Hello, world!
Als erstes Programm schreiben wir ganz klassisch ein sogenanntes *Hello World Programm*. Erstell dafür eine Datei `game.py` (z.B. in Visual Studio Code) mit dem Inhalt
```python
print("Hello, world!")
```
und führe es über den Button in VS Code oder in einer Konsole mit
```bash
python game.py
```
aus. Du solltest als Antwort `Hello, world!` ausgegeben bekommen. Yay!

Der Befehl `print` schreibt das in die Konsole, was in den Anführungszeichen in den Klammern steht - also in diesem Fall *Hello, world!*.

Probier doch mal aus, den Computer etwas anderes schreiben zu lassen.

## Sei gegrüßt!
Als nächstes möchten wir, dass unser Computer uns grüßt. Dafür muss der Computer wissen, wie wir heißen. Das lässt sich mit der `input`-Funktion lösen:
```python
name = input("Wie heißt du? ")
print("Hallo, " + name + "!")
```
Führe das wieder über den Button in VS Code oder in der Konsole mit `python game.py` aus und du solltest nach deinem Namen gefragt, und anschließend persönlich gegrüßt werden.

Der Befehl `input` Schreibt das Argument in den Klammern (hier *Wie heißt du?* in die Konsole und gibt die eingegebene Antwort zurück.
Die Antwort speichern wir (mit `=`) in der Variable `name`.
Mit `+` zwischen `"Hallo, "`, `name` und `"!"` werden die Textschnipsel aneinander gehängt und zusammen ausgegeben.

Lass den Computer doch noch mehr über dich wissen, wie z.B. dein Alter.

## Orakel
Als nächstes wollen wir ein erstes kleines Spiel programmieren. Dafür nutzen wir eine Schleife:
```python
number = 42
guess = int(input("Schätze die Zahl: "))
while guess != number:
    guess = int(input("Falsch! Schätze nochmal: "))
print("Richtig!")
```

Hier sind gleich mehrere neue Dinge:
- `int` ist eine Funktion, die den Text, der von `input` zurück kommt, in eine Zahl umwandelt.
- `!=` bedeutet "ungleich", also hier dass `guess` und `number` verschieden sind.
- `while` führt den Teil darunter (hier `guess = int(...`) so lange aus, wie die Bedingung dahinter (hier `guess != number`) stimmt. Es wird also so lange nach Schätzungen gefragt, wie `guess` (die Schätzung) anders als `number` (die gesuchte Zahl) ist.
- Am Ende der Zeile mit `while` muss ein Doppelpunkt stehen.
- Der Teil darunter (also `guess = int(...`) ist eingerückt, weil in Python nur der eingerückte Teil zur Schleife gehört.

Zusätzlich zu `!=` gibt es noch `>` für "größer" und `<` für kleiner. Außerdem gibt es zusätzlich zu `while` noch `if`; das funktioniert genauso, führt den Teil darunter aber nur *einmal* aus, wenn die Bedingung stimmt. Probier doch mal, das Programm damit so zu erweitern, dass der Computer zurück gibt, ob die Schätzung zu groß, zu klein oder richtig war.

## Text Adventure
Jetzt bist du bereit, ein richtiges Spiel zu programmieren. Dafür kann der Befehl `else` nützlich sein; der führt den Teil darunter aus, falls der `if`-Teil vorher nicht ausgeführt wurde. Außerdem gibt es noch `elif`, das ist wie `else` und `if` kombiniert; der Teil darunter wird also nur ausgeführt, wenn das `if` vorher erfolglos war und die Bedingung erfüllt ist.

Falls du etwas Inspiration brauchst, kannst du dieses Spiel ausprobieren und erweitern:
```python
ort = 0
aufgestanden = 0

while ort != 1:
    if aufgestanden == 0:
        text = input("Du liegst im Bett. Was möchtest du tun? ")
    elif aufgestanden == 1 and ort == 0:
        text = input("Du bist aufgestanden und bist in einem Zimmer. Was möchtest du tun? ")
    if text == "Aufstehen":
        if aufgestanden == 0:
            print("Du stehst auf.")
            aufgestanden = 1
        else:
            print("Du bist schon aufgestanden!")
    elif text == "Raus gehen":
        if aufgestanden == 0:
            print("Du kannst nicht raus gehen, bevor du aufgestanden bist!")
        else:
            print("Du gehst aus dem Zimmer.")
            ort = 1
    else:
        print("Ich weiß nicht, was '" + text + "' bedeutet!")


print("Du bist erfolgreich aus dem Zimmer gekommen!")
```

Was könnte es zum Beispiel noch zu tun in dem Zimmer geben? Was könnte es außerhalb von dem Zimmer geben?
