---
sidebar_position: 3
---

# APIs

## API - Application Programming Interface

### API Calls

**GET, POST, PUT, DELETE**

- GET
    - Du erhälst ein Objekt oder eine Liste von Objekten von der API
- POST
    - Du sendest ein Objekt an die API
- PUT
    - Du sendest ein Objekt an die API, welches ein Objekt ersetzt
- DELETE
    - Du sendest ein Objekt an die API, welches gelöscht werden soll


### Software für die API-Tests

https://hoppscotch.io/

https://insomnia.rest/

https://www.postman.com/

### API-Test mit curl

```bash
curl -X GET https://api.chucknorris.io/jokes/random
```

```bash

curl -X GET https://api.chucknorris.io/jokes/random | jq
```


### Schöne APIs zum testen:

https://alexwohlbruck.github.io/cat-facts/docs/



https://api.chucknorris.io/


Erhalten und senden von Daten von und an die openSenseMap
`https//api.opensensemap.org/`


https://pokeapi.co/
"All the Pokémon data you'll ever need in one place, easily accessible through a modern RESTful API."


### Eine einfache API mit JSON-Server

Der JSON-Server ist ein nützliches Tool, das es dir ermöglicht, eine einfache API (Application Programming Interface) auf Basis von JSON-Daten zu erstellen. Mit ihm kannst du Daten speichern, aktualisieren und abrufen, ohne eine komplette Datenbank einrichten zu müssen. Hier ist eine Schritt-für-Schritt-Anleitung, wie du den JSON-Server nutzen kannst:

**Schritt 1: Installation von Node.js**
Bevor du den JSON-Server verwenden kannst, musst du sicherstellen, dass Node.js auf deinem Computer installiert ist. Du kannst es von der offiziellen Node.js-Website (https://nodejs.org/) herunterladen und installieren.

**Schritt 2: Installation des JSON-Servers**
Öffne deine Kommandozeile (Terminal oder die Eingabeaufforderung) und führe den folgenden Befehl aus, um den JSON-Server über npm (Node Package Manager) zu installieren:
```bash
npm install -g json-server
```

**Schritt 3: Erstelle eine JSON-Datei mit Daten**
Lege eine neue JSON-Datei an oder verwende eine bereits vorhandene, um deine Daten zu speichern. Hier ist ein einfaches Beispiel für eine Datei namens "db.json" mit einigen Beispieldaten:

```json
{
  "todos": [
    { "id": 1, "task": "Hausaufgaben erledigen", "done": false },
    { "id": 2, "task": "Sport machen", "done": true }
  ]
}
```

**Schritt 4: Starte den JSON-Server**
Navigiere in deinem Terminal zum Verzeichnis, in dem sich deine "db.json"-Datei befindet, und führe den folgenden Befehl aus, um den JSON-Server zu starten:

```bash
json-server --watch db.json
```

Der Server wird auf Port 3000 laufen (du kannst dies ändern, wenn du möchtest).

**Schritt 5: Verwende die API**
Jetzt ist dein JSON-Server aktiv, und du kannst auf deine Daten über eine einfache API zugreifen. Zum Beispiel kannst du die folgende URL verwenden, um alle Todos abzurufen:

```
http://localhost:3000/todos
```

Du kannst auch POST-Anfragen senden, um neue Daten hinzuzufügen, PUT-Anfragen, um Daten zu aktualisieren, und DELETE-Anfragen, um Daten zu löschen.

Hier ist ein einfaches Beispiel, wie du mit JavaScript eine POST-Anfrage senden kannst, um ein neues Todo hinzuzufügen:

```javascript
fetch('http://localhost:3000/todos', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ task: 'Neue Aufgabe', done: false }),
})
  .then(response => response.json())
  .then(data => console.log(data));
```

Das war's! Du hast jetzt den JSON-Server erfolgreich eingerichtet und kannst JSON-Daten speichern, abrufen und aktualisieren. Viel Spaß beim Experimentieren und Erstellen deiner eigenen APIs!


### HTML/API

```html
<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h1>Marios Todo Liste</h1>
<p id="todo"></p>
<button onclick="fetchApi()">Zeige Todos</button>

</body>
<script>
function fetchApi() {
    fetch('http://localhost:3000/todos/1')
    .then(response => response.json())
    .then (json => document.getElementById("todo").innerHTML = json.task)
   
}
</script>
</html>

```