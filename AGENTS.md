# Hinweise für KI-Agenten

Diese Datei richtet sich an KI-Assistenten (Claude Code, Codex, Copilot und
Verwandte), die in diesem Repository arbeiten. Menschliche Mitwirkende finden
das Wesentliche zum Projekt in [`CONTRIBUTING.md`](CONTRIBUTING.md) — was dort
steht, wird hier nicht wiederholt.

## Nicht direkt auf `main`

Auf `main` wird nicht gepusht. Jede Änderung entsteht auf einem eigenen Branch
und kommt über einen Pull Request nach `main`, damit sie vor dem Merge sichtbar
und besprechbar ist.

Das gilt auch für Änderungen, die klein oder offensichtlich wirken.

Eine Freigabe für einen direkten Push gilt **nur für genau die Änderung, für
die sie erteilt wurde**. Sie überträgt sich nicht auf die nächste Aufgabe,
nicht auf den Rest der Sitzung und nicht auf „das Gleiche nochmal, nur woanders“.
Im Zweifel: Branch anlegen und fragen.

Faustregel: Je gestaltender die Änderung, desto eher will sie vorher jemand
ansehen. Ein Redesign gehört immer auf einen Branch — auch dann, wenn kurz
zuvor ein Aufräum-Commit direkt auf `main` durfte.

## Commits

* **Autor** ist der Mensch, der die Arbeit beauftragt hat.
* Der Agent trägt sich als `Co-Authored-By:` ein, ebenso weitere Beteiligte,
  mit denen die Änderung abgesprochen war.
* Commit-Nachrichten auf Deutsch. Erst in einer Zeile, *was* sich ändert, dann
  nach einer Leerzeile *warum* — der Diff zeigt ohnehin schon das Wie.
* Keine Modell- oder Werkzeugnamen in Texten, die jemand liest: nicht im
  Fließtext der Commit-Nachricht, nicht in Code-Kommentaren, nicht in
  Beschreibungen von Pull Requests und nirgends in den Inhalten des
  Auftritts. Wer den Code später liest, soll sehen, *was* er tut — nicht,
  *womit* er entstanden ist. Werkzeugnamen altern zudem schlecht: der Code
  lebt weiter, der Name von heute wirkt in zwei Jahren wie ein Fundstück.
* Ausgenommen davon ist allein die `Co-Authored-By:`-Zeile. Sie ist kein Text,
  sondern eine maschinenlesbare Angabe zur Urheberschaft, und darf den Namen
  nennen, unter dem der Agent tatsächlich gearbeitet hat. Eine anonymisierte
  Angabe wäre an dieser Stelle weniger ehrlich als eine zutreffende.
* Sonst keine maschinell erzeugten Trailer. Insbesondere keine Verweise auf
  Sitzungsprotokolle: die zeigen für jeden ins Leere, der keinen Zugang zu der
  Sitzung hat, und stehen trotzdem dauerhaft in der Historie.

## Schriften

Schriften werden **nie** von Google Fonts oder einem anderen fremden Server
nachgeladen — weder per `<link>` noch per `@import`. Jeder Aufruf einer solchen
Adresse überträgt die IP-Adresse der Besucherin an einen Dritten, ohne dass sie
gefragt wurde; für den Auftritt eines Vereins ist das weder nötig noch zulässig.

Die benötigten Schriften liegen unter `static/assets/fonts/` und werden von dort
über `@font-face` und `/assets/fonts/…` eingebunden. Wer eine neue Schrift
braucht, lädt die Dateien einmal herunter, legt sie dort ab und legt den
Lizenztext daneben. Ein Muster steht in `layouts/_default/home.html`.

Zu jeder Schriftfamilie gehört eine Ersatzkette im `font-family`, damit die
Seite auch dann lesbar bleibt, wenn eine Datei fehlt.

## Dateien unter `static/`

`static/` wird von Hugo unverändert ausgeliefert. Die Dateien dort sind
eigenständig: kein Rückgriff auf Layouts, Partials oder Stylesheets des
Auftritts. Gemeinsam genutzte Anhänge sind davon ausgenommen — Bilder und die
Schriften unter `/assets/fonts/` werden mitbenutzt statt kopiert. Wer eine
solche Seite an den Vereinslook angleicht, kopiert die Gestaltung (Farben,
Schriften, Abstände) in die Datei hinein, statt eine Abhängigkeit zu
`layouts/` oder zu `vorschau/` aufzubauen.

Formulare unter `static/` werden ausgedruckt. Ein eigener `@media print`-Block
gehört dazu.

## Vor dem Commit

* Geänderte HTML-Seiten wenigstens einmal im Browser ansehen — schmal und
  breit, und bei Formularen zusätzlich in der Druckansicht.
* Fachliche Werte (Gewichte, Geschwindigkeiten, Drehzahlen, Frequenzen) nicht
  nebenbei mitändern. Wer eine Seite umgestaltet, lässt die Zahlen in Ruhe und
  prüft danach nach, dass sie unverändert sind.
