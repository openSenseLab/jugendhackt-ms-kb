# Python installieren
## Schon installiert?
Als erstes kannst du überprüfen, ob Python schon installiert ist. Öffne dafür eine Konsole (z.B. `CMD`, bzw. die `Eingabeaufforderung` in Windows) und gib `python --version` ein. Wenn du eine Version zurück bekommst, ist Python installiert und du musst nichts weiter tun.

## Installieren in Windows
Lade dir den [Windows Installer](https://www.python.org/ftp/python/3.12.2/python-3.12.2-amd64.exe) von der [Python Website](https://www.python.org/downloads/release/python-3122/) runter.

*Für Profis: Prüfe die MD5 Prüfsumme mit `certUtil -hashfile <PFAD_ZUM_DOWNLOAD> MD5`.*

Führe die heruntergeladene `.exe`-Datei aus und befolge die Schritte in dem Installer. Falls du zwischendrin Administrator-Rechte brauchst, frag ein\*e Mentor\*in.

## Installieren in Linux
Falls du auf einer Linux-Distribution mit `apt` bist, führe
```bash
sudo apt update
sudo apt install python3 python-is-python3
```
Falls du kein `apt` hast, nutz einen anderen Package-Manager auf die gleiche Weise.
