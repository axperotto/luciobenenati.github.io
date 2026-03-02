# Checklist Google Search Console (10-15 minuti)

Data: 2026-03-02
Sito: https://www.luciobenenati.com/

## 1) Proprietà corretta
- Apri Google Search Console.
- Usa la proprietà Dominio (consigliata) oppure URL prefix https://www.luciobenenati.com/.
- Se non è verificata, completa verifica DNS o HTML secondo la procedura guidata.

## 2) Invia sitemap
- Vai su Indicizzazione > Sitemap.
- Invia questa sitemap:
  - https://www.luciobenenati.com/sitemap.xml
- Controlla che lo stato sia Successo.

## 3) Richiedi indicizzazione URL principali
- Vai su Controllo URL.
- Verifica e invia indicizzazione per:
  - https://www.luciobenenati.com/
  - https://www.luciobenenati.com/en/

## 4) Controllo copertura e crawl
- Vai su Indicizzazione > Pagine.
- Verifica che non ci siano errori su:
  - Pagina con reindirizzamento imprevisto
  - Bloccata da robots.txt
  - Esclusa da noindex
- Se trovi errori, apri il dettaglio URL e confronta canonical e hreflang.

## 5) Verifica segnali internazionali
- Nelle due pagine, controlla che Google veda:
  - Canonical IT: https://www.luciobenenati.com/
  - Canonical EN: https://www.luciobenenati.com/en/
  - Hreflang reciproco IT/EN e x-default

## 6) Core Web Vitals
- Vai su Esperienza > Segnali Web essenziali.
- Monitora LCP, CLS, INP per mobile e desktop.
- Nota: i dati possono impiegare giorni per aggiornarsi.

## 7) Performance ricerca
- Vai su Risultati di ricerca.
- Imposta filtro data ultimi 28 giorni.
- Confronta query e pagine:
  - / (italiano)
  - /en/ (inglese)
- KPI da monitorare: Impressioni, CTR, Posizione media.

## 8) Validazione rich results (facoltativo ma consigliato)
- Usa il test Rich Results:
  - https://search.google.com/test/rich-results
- Verifica entrambe le URL principali.

## 9) Routine settimanale
- 1 volta a settimana:
  - Controlla nuovi errori in Pagine.
  - Controlla andamento impressioni/CTR.
  - Se aggiorni contenuti, reinvia URL principali.

## Note rapide
- robots.txt e sitemap sono già configurati.
- Sono presenti due versioni indicizzabili: IT su / e EN su /en/.
- Se pubblichi nuove pagine, aggiungile in sitemap.xml.
