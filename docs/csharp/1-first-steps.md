---
sidebar_position: 1
sidebar_label: 1. Erste Schritte
---

# Erste Schritte

## Das Terminal

Zuerst öffnest du in Visual Studio Code (VSCode) den Ordner, in dem du das Projekt abspeichern möchtest. Hier werden alle Projekt- und Codedateien später liegen.

![Ein Screenshot aus VSCode, in dem der 'Ordner öffnen' Menüpunkt markiert ist](../assets/csharp/cs_open_folder.jpg)

Wähle am unteren Bildschirmrand den Reiter "Terminal" aus. Falls der Reiter nicht offen sein sollte, kannst du ihn oben über das Menü `Terminal` -> `Neues Terminal` öffnen.

![Ein Screenshot aus VSCode, in dem as Terminal markiert ist](../assets/csharp/vscode_terminal.jpg)

![Ein Screenshot aus VSCode, in dem der 'Terminal öffnen' Menüpunkt markiert ist](../assets/csharp/vscode_open_terminal.jpg)

Im Terminal kannst du direkt Befehle an den Computer geben, die im aktuellen Ordner ausgeführt werden (Im Screenshot oben ist das Terminal beispielsweise im Ordner `H:\Programming\Repositories\jugendhackt-ms-kb` geöffnet).

## Das erste Projekt

Um C# auszuführen, brauchst du zuerst ein sogenanntes 'Projekt'. Das kannst du erstellen, indem du im Terminal folgenden Befehl ausführst: 
```ps
dotnet new console --name FirstSteps --framework net8.0 --language "C#"
```

Dadurch erstellst du ein neues Projekt mit dem Namen 'FirstSteps' in der aktuellsten Version von C#. Jetzt solltest du mehrere Dateien links im Explorer sehen

![Ein Screenshot aus VSCode, in dem die Dateien Program.cs und FirstSteps.csproj zu sehen sind](../assets/csharp/vscode_files_start.jpg)

