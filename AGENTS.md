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

## Sprache

Deutsche Texte mit echten Umlauten: ä, ö, ü, ß — nicht ae, oe, ue, ss. Das gilt
für Commit-Nachrichten, Code-Kommentare und die Inhalte des Auftritts. Ältere
Commits in der Historie halten sich nicht daran; sie sind kein Vorbild.

Antworten im Dialog knapp halten: Ergebnis und Begründung, kein Zwischenbericht
über jeden einzelnen Schritt.

## Schriften

Schriften werden **nie** von Google Fonts oder einem anderen fremden Server
nachgeladen — weder per `<link>` noch per `@import`. Jeder Aufruf einer solchen
Adresse überträgt die IP-Adresse der Besucherin an einen Dritten, ohne dass sie
gefragt wurde; für den Auftritt eines Vereins ist das weder nötig noch zulässig.

Die benötigten Schriften liegen unter `static/assets/fonts/` und werden von dort
über `@font-face` und `/assets/fonts/…` eingebunden. Wer eine neue Schrift
braucht, lädt die Dateien einmal herunter, legt sie dort ab und legt den
Lizenztext daneben. Ein Muster steht in `static/WT9_Fragebogen.html`.

Zu jeder Schriftfamilie gehört eine Ersatzkette im `font-family`, damit die
Seite auch dann lesbar bleibt, wenn eine Datei fehlt.

## Startseite: saisonale Banner und Carousel

Die Startseite (`layouts/_default/home.html`) wird über das Jahr hinweg nicht
umgebaut, sondern umgeschaltet: Banner und Slides für wiederkehrende Anlässe
bleiben als HTML-Kommentar stehen und werden zur passenden Zeit wieder
einkommentiert. Was auskommentiert ist, ist also kein Abfall, sondern Vorrat.
Nichts davon ohne Rückfrage löschen.

Der Vorrat, von oben nach unten:

* **Banner über dem Carousel:** AERO Friedrichshafen (`2025-aero-banner.jpg`,
  728×90, verlinkt) und das Flugplatzfest-Plakat (`events/Flugplatzfest2025-…`,
  mit `srcset`). Beide tragen die Jahreszahl 2025 und brauchen vor einer
  Wiederverwendung neue Bilder.
* **Winter-Banner im Carousel-Container:** das Winterbar-Plakat von 2024
  (`events/2024-Winterbar.jpeg`) und der Sonnwendfeier-Flyer
  (`sonnwendfeier-flyer.jpg`, Hochformat). Der Flyer trägt keine Jahreszahl und
  passt so jedes Jahr; das Winterbar-Plakat nennt Termine von 2024.
* **Slides im Carousel:** Landebar-Saison (Ostern bis Herbst), Himmelfahrt-Grillen
  (Datum im Text anpassen), „Landebar im Winterurlaub“, Corona-Schließung,
  Duo Discus XL, Flugbetrieb, Flugplatz.
* **Popups am Ende:** „Oldtimer trifft Flugplatz“ und Sonnwendfeier, beide über
  featherlight. Das Skript dafür kam von `cdn.rawgit.com`; den Dienst gibt es
  nicht mehr, und ein fremder Server widerspräche ohnehin dem, was oben zu
  Schriften steht. Wer ein Popup zurückholen will, legt `featherlight.min.js`
  lokal unter `static/assets/` ab. Das Stylesheet liegt schon dort und wird im
  Block `head` eingebunden.

Der Jahreslauf, wie er sich aus der Historie ergibt: Ab Ostern läuft die Slide
„Landebar-Saison“. Im Herbst ersetzt sie eine Winter-Slide, die auf die
Winterbar (Fremdbetrieb auf dem Flugplatz, nicht vom Verein, eigene Seite
<https://www.winterbar-heiningen.de/>) und die Sonnwendfeier am 28.12.
hinweist. Nach Ostern wird umgekehrt getauscht. Die Spalte „Essen & Trinken“
weiter unten erzählt dasselbe in Textform und muss mitgezogen werden, ebenso
die Seite `content/flugplatz/bewirtung.html`, auf der Sommer- und Wintertext
nach demselben Muster wechselweise auskommentiert sind.

Für größere Anlässe (Flugplatzfest) wird die ganze Startseite durch eine
Microsite ersetzt; wie das geht, steht in der `README.md`.

Zum Carousel (flexslider):

* Bilder im Seitenverhältnis 950×354. Neue Bilder in doppelter Auflösung
  (1900×708) ablegen und im `<img>` mit `width="950" height="354"` auszeichnen.
* Die Bildunterschrift (`.slider-caption`) liegt links unten über dem Bild und
  deckt ungefähr das linke Drittel ab, auf halber Höhe beginnend. Text im Bild
  gehört deshalb nach rechts, und helle Flächen haben links unten nichts verloren,
  weil die Unterschrift nur halbtransparent hinterlegt ist.
* Unter 768 px Breite blendet `style.css` die Bildunterschrift aus. Auf dem
  Telefon muss das Bild allein sagen, worum es geht: Termin und Anlass gehören
  ins Bild, nicht nur in die Unterschrift.
* Die Unterschrift kurz halten, zwei bis drei Sätze. Längerer Text lässt den
  Kasten so hoch werden, dass er das halbe Bild verdeckt.

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
