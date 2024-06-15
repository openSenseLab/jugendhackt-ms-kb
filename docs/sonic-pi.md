---
sidebar_position: 8
sidebar_label: Sonic Pi
---

# Sonic Pi

Sonic Pi ist ein Programm, in dem du mit Code Musik machen kannst. Für komplexere Stücke ist es von Vorteil, wenn du bereits grundlegende Programmiererfahrung mit z.B. Schleifen hat. Aber für einfachere Projekte sind keine Vorerfahrungen nötig.

## Noten
Einzelne Noten kann Sonic Pi abspielen, indem man `play :<Note>` schreibt, also z.B. `play :C` spielt ein C ab. Du kannst natürlich auch die Höhe des C bestimmen. `play :C2` spielt ein tiefes C und `play :C6` spielt ein hohes C.

Normale Programmiersprachen führen Befehle immer nacheinander aus. Eine Besonderheit von Sonic Pi ist aber, dass es alle Befehle gleichzeitig ausführt. Wenn du also mehrere `play :<Note>` untereinander schreibst, werden alle Noten gleichzeitig gespielt. So kannst du mit dem folgenden Code einen Dreiklang spielen:
```
play :C
play :E
play :G
```

## Pausen
In der Musik werden aber nicht immer alle Noten gleichzeitig gespielt, sondern meistens nacheinandern. Wenn du Noten in Sonic Pi nacheinander spielen willst, musst du dazwischen Pausen einlegen mit `sleep <Länge>`. So legt `sleep 1` eine Pause der Länge 1 ein. **Achtung**: Das heißt nicht, dass 1 Sekunde Pause gemacht wird. Je nachdem ob das Stück schneller oder langsamer gespielt wird, ist auch die Pause kürzer oder länger.

## Geschwindigkeit
Die sogenannten BPM (beats per minute / Schläge pro Minute) geben an, wie schnell Musik gespielt wird. In Sonic Pi kannst du das über den Befehl `use_bpm <Schlagzahl>` angeben. So wird `use_bpm 160` doppelt so schnell gespielt wie `use_bpm 80`. **Achtung**: Der Befehl muss immer vor dem Code, der in dieser Geschwindingkeit gespielt werden soll. Also schreibe `use_bpm <Schlagzahl>` am besten immer ganz oben vor alles andere hin.

## Schleifen
Oft werden bestimmte Noten in einem Musikstück immer wieder wiederholt. Dafür hat Sonic Pi eingebaute Schleifen. Im folgenden Beispiel wird zweimal ein D gespielt mit einer kurzen Pause dazwischen:
```
2.times do
  play :D
  sleep 0.5
end
```
Du kannst natürlich auch Schleifen in Schleifen stapel. Hier wird viermal hintereinander zwei Cs und ein D gespielt:
```
4.times do
  2.times do
    play :C
    sleep 0.5
  end
  play :D
  sleep 0.5
end
```

## Samples
Wir haben bisher gelernt, Noten zu spielen. Aber nicht jeder Ton in der Musik kann durch Klaviernoten abgebildet werden. Eine Trommel oder eine Snare eines Schlagzeugs könnten wir so nicht abspielen. Dafür braucht es sogenannte Samples. Samples sind voraufgenommene Klänge verschiedener Musikinstriumente und können über `sample :<Sample-Name>` gespielt werden. Im Reiter "Samples" links unten in Sonic Pi findest du alle Samples, die du benutzen kannst. Hier ist ein Beispiel für einen (etwas langweiligen) Schlagzeug-Beat:
```
4.times do
  sample :bd_haus
  sleep 0.5
  sample :drum_cymbal_closed
  sleep 0.5
end
```

## Live loops
