# Vorschau — Entwurf für den neuen Auftritt

Statischer Entwurf zur Ansicht im Verein. **Nicht** die offizielle Seite.

## Was hier liegt

| Datei | Inhalt |
|---|---|
| `index.html` | Startseite |
| `anflug.html` | Unterseiten-Vorlage am Beispiel „Anflug auf EDSH“ |
| `stil.css` | komplettes Stylesheet, inklusive Umbrüche für Tablet und Telefon |
| `menue.js` | Klappmenü für schmale Schirme (ohne JavaScript bleibt die Seite benutzbar) |
| `bilder/` | Fotos und Logo-SVGs, eigene Kopien — der Ordner läuft ohne den Rest des Repos |

## Anschauen

Doppelklick auf `index.html` genügt. Oder im Ordner:

    python3 -m http.server 8000

und dann `http://localhost:8000` öffnen.

## Umbrüche

* **ab 1141 px** — volle Ansicht: Navigation ausgeschrieben, drei Türen nebeneinander,
  Seitenspalte rechts neben dem Text
* **721 – 1140 px** — Tablet: Menü klappt zusammen, Türen werden liegende Karten,
  Platzdaten dreispaltig, Seitenspalte wandert über den Text
* **bis 720 px** — Telefon: alles einspaltig, Vereinsname zweizeilig,
  „PPR anfragen“ verkürzt zu „PPR“

Die Navigation klappt schon bei 1140 px zusammen, nicht erst bei 768: Logo, Vereinsname,
fünf Menüpunkte und der PPR-Knopf brauchen zusammen mehr Platz als ein Tablet quer hat.

## Was noch fehlt

* Zwei Kartenausschnitte „Abflug Piste 10 / 28“ sind Platzhalter
* „75 Jahre LSV“ auf der Festkarte ist gerechnet (1951 + 75), nicht geprüft
* Alle Links außer der Verbindung zwischen den beiden Seiten führen ins Leere
