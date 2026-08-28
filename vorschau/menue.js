// Klappmenü für schmale Schirme. Ohne JavaScript bleibt die Kopfzeile
// benutzbar: der PPR-Knopf ist ein normaler Link, die Fußzeile führt
// zu allen Bereichen.
(function () {
  var schalter = document.querySelector('.menue-schalter');
  var menue = document.getElementById('klappmenue');
  if (!schalter || !menue) return;

  function setzen(offen) {
    menue.hidden = !offen;
    schalter.setAttribute('aria-expanded', String(offen));
    schalter.setAttribute('aria-label', offen ? 'Menü schließen' : 'Menü öffnen');
  }

  schalter.addEventListener('click', function () {
    setzen(menue.hidden);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !menue.hidden) {
      setzen(false);
      schalter.focus();
    }
  });
})();

// PPR-Split-Button: der schmale Pfeil öffnet ein Menü mit der Zusatzoption
// „Zustimmung Drohnenflug“. Der Hauptteil bleibt ein normaler Link.
(function () {
  var alle = document.querySelectorAll('.anfrage');
  if (!alle.length) return;

  function schliessen(ausser) {
    alle.forEach(function (wrapper) {
      if (wrapper === ausser) return;
      var schalter = wrapper.querySelector('.anfrage-schalter');
      var menue = wrapper.querySelector('.anfrage-menue');
      if (!schalter || !menue || menue.hidden) return;
      menue.hidden = true;
      schalter.setAttribute('aria-expanded', 'false');
    });
  }

  alle.forEach(function (wrapper) {
    var schalter = wrapper.querySelector('.anfrage-schalter');
    var menue = wrapper.querySelector('.anfrage-menue');
    if (!schalter || !menue) return;

    schalter.addEventListener('click', function (e) {
      e.stopPropagation();
      var warOffen = !menue.hidden;
      schliessen(wrapper);
      menue.hidden = warOffen;
      schalter.setAttribute('aria-expanded', String(!warOffen));
      if (!warOffen) {
        var erstesLink = menue.querySelector('a');
        if (erstesLink) erstesLink.focus();
      }
    });
  });

  document.addEventListener('click', function () { schliessen(); });

  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    alle.forEach(function (wrapper) {
      var schalter = wrapper.querySelector('.anfrage-schalter');
      var menue = wrapper.querySelector('.anfrage-menue');
      if (schalter && menue && !menue.hidden) {
        menue.hidden = true;
        schalter.setAttribute('aria-expanded', 'false');
        schalter.focus();
      }
    });
  });
})();
