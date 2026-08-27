(function () {
  'use strict';

  var ITEMS = [
  {
    "src": "/imgs/VogueSposa.JPG",
    "width": 1066,
    "height": 1600,
    "alt": "Scatto editoriale Vogue Sposa con headpiece couture e styling accessori",
    "altEn": "Vogue Sposa editorial shot featuring couture headpiece and accessories styling",
    "title": "Editoriale Vogue Sposa",
    "titleEn": "Vogue Sposa Editorial",
    "desc": "Scatto editoriale Vogue Sposa con focus su accessori couture e ricerca stilistica.",
    "descEn": "Vogue Sposa editorial shot focusing on couture accessories and stylistic research.",
    "span": "span-6",
    "size": "tall",
    "eager": true
  },
  {
    "src": "/imgs/BraccialeStrass.JPG",
    "width": 1200,
    "height": 1600,
    "alt": "Bracciale gioiello con pietre taglio marquise, styling editoriale haute couture",
    "altEn": "Statement bracelet with marquise-cut stones styled for a haute couture editorial",
    "title": "Design di monili",
    "titleEn": "Jewelry Design",
    "desc": "Composizione luminosa con pietra statement e catena dorata.",
    "descEn": "Luminous composition featuring a statement stone and golden chain.",
    "span": "span-6",
    "size": "tall",
    "eager": false
  },
  {
    "src": "/imgs/GabbiaVogueSposa.JPG",
    "width": 360,
    "height": 480,
    "alt": "Headpiece a gabbia realizzato per editoriale Vogue Sposa",
    "altEn": "Cage headpiece created for a Vogue Sposa editorial",
    "title": "Headpiece a gabbia",
    "titleEn": "Cage Headpiece",
    "desc": "Progetto Vogue Sposa con struttura a gabbia: volume leggero e impatto scenico.",
    "descEn": "Vogue Sposa project featuring a cage structure: lightweight volume with scenic impact.",
    "span": "span-8",
    "size": "med",
    "eager": false
  },
  {
    "src": "/imgs/SpillaGioiello.JPG",
    "width": 1600,
    "height": 1200,
    "alt": "Spilla gioiello con perle e cristalli su base dorata",
    "altEn": "Jewelry brooch with pearls and crystals on a golden base",
    "title": "Motivi barocchi",
    "titleEn": "Baroque Motifs",
    "desc": "Spilla con cristalli e perle: un accento prezioso dal gusto couture contemporaneo.",
    "descEn": "Brooch with crystals and pearls: a precious accent with a contemporary couture flair.",
    "span": "span-4",
    "size": "med",
    "eager": false
  },
  {
    "src": "/imgs/VogueSposaIkebana.JPG",
    "width": 348,
    "height": 480,
    "alt": "Editoriale Vogue Sposa Ikebana con accessori couture",
    "altEn": "Vogue Sposa Ikebana editorial featuring couture accessories",
    "title": "Vogue Sposa Ikebana",
    "titleEn": "Vogue Sposa Ikebana",
    "desc": "Variante editoriale Ikebana: composizione materica e styling raffinato.",
    "descEn": "Ikebana editorial variant: textural composition and refined styling.",
    "span": "span-12",
    "size": "med",
    "eager": false
  },
  {
    "src": "/imgs/GioielliPerle.JPG",
    "width": 1200,
    "height": 1600,
    "alt": "Composizione di gioielli con perle e dettagli dorati",
    "altEn": "Jewelry composition with pearls and golden details",
    "title": "Perle & cristalli",
    "titleEn": "Pearls & Crystals",
    "desc": "Gioielli perle con accenti dorati: equilibrio tra romanticismo e impatto fotografico.",
    "descEn": "Pearl jewelry with golden accents: striking a balance between romance and photographic impact.",
    "span": "span-6",
    "size": "med",
    "eager": false
  },
  {
    "src": "/imgs/SfilataDolceGabbana.JPG",
    "width": 640,
    "height": 960,
    "alt": "Look di sfilata Dolce & Gabbana con focus su accessori",
    "altEn": "Dolce & Gabbana runway look with focus on accessories",
    "title": "Fashion styling",
    "titleEn": "Fashion Styling",
    "desc": "Look di sfilata Dolce & Gabbana: styling accessori in dialogo con silhouette couture.",
    "descEn": "Dolce & Gabbana runway look: accessory styling conversing with couture silhouettes.",
    "span": "span-6",
    "size": "med",
    "eager": false
  },
  {
    "src": "/imgs/VogueSposaAfrica.JPG",
    "width": 364,
    "height": 480,
    "alt": "Editoriale Vogue Sposa Africa con accessori e headpiece",
    "altEn": "Vogue Sposa Africa editorial with accessories and headpiece",
    "title": "Vogue Sposa Africa",
    "titleEn": "Vogue Sposa Africa",
    "desc": "Variante editoriale Africa: accessori statement e costruzione visiva ad alto contrasto.",
    "descEn": "Africa editorial variant: statement accessories and high-contrast visual construction.",
    "span": "span-6",
    "size": "med",
    "eager": false
  },
  {
    "src": "/imgs/cerchiettoGioiello.JPG",
    "width": 900,
    "height": 1600,
    "alt": "Cerchietto gioiello con finiture decorative",
    "altEn": "Jeweled headband with decorative finishing details",
    "title": "Cerchietto gioiello",
    "titleEn": "Jeweled Headband",
    "desc": "Versione dettagliata del cerchietto gioiello con finiture decorative e resa fotografica.",
    "descEn": "Detailed version of a jeweled headband with decorative finishes and photographic rendering.",
    "span": "span-6",
    "size": "med",
    "eager": false
  },
  {
    "src": "/imgs/gioielliZar.JPG",
    "width": 1200,
    "height": 1600,
    "alt": "Composizione di gioielli metallici",
    "altEn": "Composition of metallic jewelry pieces",
    "title": "Composizione gioielli",
    "titleEn": "Jewelry Composition",
    "desc": "Selezione di gioielli metallici con layering e accenti luminosi per presentazione collezione.",
    "descEn": "Selection of metallic jewelry with layering and luminous accents for collection presentation.",
    "span": "span-12",
    "size": "med",
    "eager": false
  },
  {
    "src": "/imgs/272471CA-0348-4C1E-B434-08FA1B191BF7.jpg",
    "width": 1440,
    "height": 1759,
    "alt": "",
    "altEn": "",
    "title": "",
    "titleEn": "",
    "desc": "",
    "descEn": "",
    "span": "span-6",
    "size": "tall",
    "eager": false
  },
  {
    "src": "/imgs/55A6A720-ECB0-4ED4-92FB-0C052BD58CB3.jpg",
    "width": 1440,
    "height": 1801,
    "alt": "",
    "altEn": "",
    "title": "",
    "titleEn": "",
    "desc": "",
    "descEn": "",
    "span": "span-6",
    "size": "tall",
    "eager": false
  },
  {
    "src": "/imgs/FullSizeRender.jpeg",
    "width": 740,
    "height": 816,
    "alt": "",
    "altEn": "",
    "title": "",
    "titleEn": "",
    "desc": "",
    "descEn": "",
    "span": "span-6",
    "size": "med",
    "eager": false
  },
  {
    "src": "/imgs/IMG_1333.JPG",
    "width": 3264,
    "height": 2448,
    "alt": "",
    "altEn": "",
    "title": "",
    "titleEn": "",
    "desc": "",
    "descEn": "",
    "span": "span-6",
    "size": "med",
    "eager": false
  },
  {
    "src": "/imgs/IMG_1594.JPG",
    "width": 3264,
    "height": 2448,
    "alt": "",
    "altEn": "",
    "title": "",
    "titleEn": "",
    "desc": "",
    "descEn": "",
    "span": "span-6",
    "size": "med",
    "eager": false
  },
  {
    "src": "/imgs/IMG_2095.jpg",
    "width": 3024,
    "height": 4032,
    "alt": "",
    "altEn": "",
    "title": "",
    "titleEn": "",
    "desc": "",
    "descEn": "",
    "span": "span-6",
    "size": "tall",
    "eager": false
  },
  {
    "src": "/imgs/IMG_2683.jpg",
    "width": 3024,
    "height": 4032,
    "alt": "",
    "altEn": "",
    "title": "",
    "titleEn": "",
    "desc": "",
    "descEn": "",
    "span": "span-6",
    "size": "tall",
    "eager": false
  },
  {
    "src": "/imgs/IMG_2886.JPG",
    "width": 992,
    "height": 660,
    "alt": "",
    "altEn": "",
    "title": "",
    "titleEn": "",
    "desc": "",
    "descEn": "",
    "span": "span-12",
    "size": "med",
    "eager": false
  },
  {
    "src": "/imgs/IMG_3068.JPG",
    "width": 940,
    "height": 370,
    "alt": "",
    "altEn": "",
    "title": "",
    "titleEn": "",
    "desc": "",
    "descEn": "",
    "span": "span-12",
    "size": "med",
    "eager": false
  },
  {
    "src": "/imgs/IMG_3403.jpg",
    "width": 3024,
    "height": 4032,
    "alt": "",
    "altEn": "",
    "title": "",
    "titleEn": "",
    "desc": "",
    "descEn": "",
    "span": "span-6",
    "size": "tall",
    "eager": false
  },
  {
    "src": "/imgs/IMG_3410.jpg",
    "width": 3024,
    "height": 4032,
    "alt": "",
    "altEn": "",
    "title": "",
    "titleEn": "",
    "desc": "",
    "descEn": "",
    "span": "span-6",
    "size": "tall",
    "eager": false
  },
  {
    "src": "/imgs/IMG_3439.jpg",
    "width": 3024,
    "height": 4032,
    "alt": "",
    "altEn": "",
    "title": "",
    "titleEn": "",
    "desc": "",
    "descEn": "",
    "span": "span-6",
    "size": "tall",
    "eager": false
  },
  {
    "src": "/imgs/IMG_5148.JPG",
    "width": 3264,
    "height": 2448,
    "alt": "",
    "altEn": "",
    "title": "",
    "titleEn": "",
    "desc": "",
    "descEn": "",
    "span": "span-6",
    "size": "med",
    "eager": false
  },
  {
    "src": "/imgs/IMG_5326.JPG",
    "width": 3264,
    "height": 2448,
    "alt": "",
    "altEn": "",
    "title": "",
    "titleEn": "",
    "desc": "",
    "descEn": "",
    "span": "span-6",
    "size": "med",
    "eager": false
  },
  {
    "src": "/imgs/IMG_5871.JPG",
    "width": 828,
    "height": 1071,
    "alt": "",
    "altEn": "",
    "title": "",
    "titleEn": "",
    "desc": "",
    "descEn": "",
    "span": "span-6",
    "size": "tall",
    "eager": false
  },
  {
    "src": "/imgs/IMG_6064.JPG",
    "width": 3264,
    "height": 2448,
    "alt": "",
    "altEn": "",
    "title": "",
    "titleEn": "",
    "desc": "",
    "descEn": "",
    "span": "span-6",
    "size": "med",
    "eager": false
  },
  {
    "src": "/imgs/IMG_7050.JPG",
    "width": 828,
    "height": 1019,
    "alt": "",
    "altEn": "",
    "title": "",
    "titleEn": "",
    "desc": "",
    "descEn": "",
    "span": "span-6",
    "size": "tall",
    "eager": false
  },
  {
    "src": "/imgs/IMG_7406.jpg",
    "width": 1159,
    "height": 1050,
    "alt": "",
    "altEn": "",
    "title": "",
    "titleEn": "",
    "desc": "",
    "descEn": "",
    "span": "span-6",
    "size": "med",
    "eager": false
  },
  {
    "src": "/imgs/IMG_7434.jpg",
    "width": 1170,
    "height": 1529,
    "alt": "",
    "altEn": "",
    "title": "",
    "titleEn": "",
    "desc": "",
    "descEn": "",
    "span": "span-6",
    "size": "tall",
    "eager": false
  },
  {
    "src": "/imgs/IMG_7775.JPG",
    "width": 354,
    "height": 480,
    "alt": "",
    "altEn": "",
    "title": "",
    "titleEn": "",
    "desc": "",
    "descEn": "",
    "span": "span-6",
    "size": "tall",
    "eager": false
  },
  {
    "src": "/imgs/IMG_7891.JPG",
    "width": 2168,
    "height": 3264,
    "alt": "",
    "altEn": "",
    "title": "",
    "titleEn": "",
    "desc": "",
    "descEn": "",
    "span": "span-6",
    "size": "tall",
    "eager": false
  },
  {
    "src": "/imgs/IMG_8485.JPG",
    "width": 640,
    "height": 640,
    "alt": "",
    "altEn": "",
    "title": "",
    "titleEn": "",
    "desc": "",
    "descEn": "",
    "span": "span-6",
    "size": "med",
    "eager": false
  },
  {
    "src": "/imgs/IMG_8821.jpg",
    "width": 3024,
    "height": 4032,
    "alt": "",
    "altEn": "",
    "title": "",
    "titleEn": "",
    "desc": "",
    "descEn": "",
    "span": "span-6",
    "size": "tall",
    "eager": false
  },
  {
    "src": "/imgs/IMG_9018.JPG",
    "width": 3264,
    "height": 2448,
    "alt": "",
    "altEn": "",
    "title": "",
    "titleEn": "",
    "desc": "",
    "descEn": "",
    "span": "span-6",
    "size": "med",
    "eager": false
  },
  {
    "src": "/imgs/IMG_9143.jpg",
    "width": 3024,
    "height": 4032,
    "alt": "",
    "altEn": "",
    "title": "",
    "titleEn": "",
    "desc": "",
    "descEn": "",
    "span": "span-6",
    "size": "tall",
    "eager": false
  },
  {
    "src": "/imgs/IMG_9415.JPG",
    "width": 3264,
    "height": 2448,
    "alt": "",
    "altEn": "",
    "title": "",
    "titleEn": "",
    "desc": "",
    "descEn": "",
    "span": "span-6",
    "size": "med",
    "eager": false
  },
  {
    "src": "/imgs/IMG_9420.jpg",
    "width": 3024,
    "height": 4032,
    "alt": "",
    "altEn": "",
    "title": "",
    "titleEn": "",
    "desc": "",
    "descEn": "",
    "span": "span-6",
    "size": "tall",
    "eager": false
  },
  {
    "src": "/imgs/IMG_9972.JPG",
    "width": 960,
    "height": 640,
    "alt": "",
    "altEn": "",
    "title": "",
    "titleEn": "",
    "desc": "",
    "descEn": "",
    "span": "span-12",
    "size": "med",
    "eager": false
  }
];

  // ── GRID ─────────────────────────────────────────────────────────────────

  function renderGallery() {
    var grid = document.getElementById('portfolio-grid');
    if (!grid) return;

    var lang = document.documentElement.lang || 'it';

    var html = ITEMS.map(function (item, idx) {
      var loading = item.eager ? 'eager' : 'lazy';
      var fetchAttr = item.eager ? ' fetchpriority="high"' : '';
      var alt = (lang === 'en' && item.altEn) ? item.altEn : (item.alt || '');

      var srcWebp = item.src.replace(/\.[^.]+$/, '.webp');
      var sourceTag = '<source srcset="' + srcWebp + '" type="image/webp">';

      return '<figure class="port-item ' + item.span + ' ' + item.size + '"' +
          ' data-lb-idx="' + idx + '" style="cursor:pointer;" tabindex="0"' +
          ' role="button" aria-label="Apri immagine ' + (idx + 1) + '">' +
        '<picture>' +
          sourceTag +
          '<img src="' + item.src + '" loading="' + loading + '"' + fetchAttr +
            ' decoding="async" width="' + item.width + '" height="' + item.height +
            '" alt="' + alt + '">' +
        '</picture>' +
      '</figure>';
    }).join('');

    grid.innerHTML = html;

    // Stagger-fade in
    grid.querySelectorAll('.port-item').forEach(function (el, i) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity .6s ease, transform .6s ease';
      setTimeout(function () {
        el.style.opacity = '';
        el.style.transform = '';
      }, 60 + i * 40);
    });

    // Open lightbox on click / Enter
    grid.addEventListener('click', function (e) {
      var fig = e.target.closest('[data-lb-idx]');
      if (fig) openLightbox(parseInt(fig.getAttribute('data-lb-idx'), 10));
    });
    grid.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        var fig = e.target.closest('[data-lb-idx]');
        if (fig) openLightbox(parseInt(fig.getAttribute('data-lb-idx'), 10));
      }
    });
  }

  // ── LIGHTBOX ─────────────────────────────────────────────────────────────

  var lbCurrent = 0;
  var lbOverlay, lbImg, lbCounter, lbClose, lbPrev, lbNext;
  var touchStartX = 0;

  function initLightbox() {
    lbOverlay = document.getElementById('lb-overlay');
    lbImg     = document.getElementById('lb-img');
    lbCounter = document.getElementById('lb-counter');
    lbClose   = document.getElementById('lb-close');
    lbPrev    = document.getElementById('lb-prev');
    lbNext    = document.getElementById('lb-next');
    if (!lbOverlay) return;

    lbClose.addEventListener('click', closeLightbox);
    lbPrev.addEventListener('click', function () { navigate(-1); });
    lbNext.addEventListener('click', function () { navigate(1); });

    lbOverlay.addEventListener('click', function (e) {
      if (e.target === lbOverlay) closeLightbox();
    });

    document.addEventListener('keydown', function (e) {
      if (!lbOverlay.classList.contains('open')) return;
      if (e.key === 'Escape')      closeLightbox();
      else if (e.key === 'ArrowLeft')  navigate(-1);
      else if (e.key === 'ArrowRight') navigate(1);
    });

    // Touch swipe
    lbOverlay.addEventListener('touchstart', function (e) {
      touchStartX = e.changedTouches[0].clientX;
    }, { passive: true });
    lbOverlay.addEventListener('touchend', function (e) {
      var dx = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(dx) > 50) navigate(dx < 0 ? 1 : -1);
    }, { passive: true });
  }

  function openLightbox(idx) {
    if (!lbOverlay) return;
    lbCurrent = idx;
    showImage();
    lbOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    lbClose.focus();
  }

  function closeLightbox() {
    lbOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  function navigate(dir) {
    lbCurrent = (lbCurrent + dir + ITEMS.length) % ITEMS.length;
    showImage();
  }

  function showImage() {
    var item = ITEMS[lbCurrent];
    lbImg.src = item.src;
    lbImg.alt = item.alt || '';
    lbCounter.textContent = (lbCurrent + 1) + ' / ' + ITEMS.length;
  }

  // ── INIT ─────────────────────────────────────────────────────────────────

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      renderGallery();
      initLightbox();
    });
  } else {
    renderGallery();
    initLightbox();
  }

}());
