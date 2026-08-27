(function () {
  'use strict';

  var ITEMS = [
  {
    "src": "/imgs/272471CA-0348-4C1E-B434-08FA1B191BF7.jpg",
    "width": 1440,
    "height": 1759,
    "alt": "",
    "span": "span-6",
    "size": "tall",
    "eager": true
  },
  {
    "src": "/imgs/BraccialeStrass.JPG",
    "width": 1200,
    "height": 1600,
    "alt": "",
    "span": "span-6",
    "size": "tall",
    "eager": false
  },
  {
    "src": "/imgs/FullSizeRender.jpeg",
    "width": 740,
    "height": 816,
    "alt": "",
    "span": "span-6",
    "size": "med",
    "eager": false
  },
  {
    "src": "/imgs/GabbiaVogueSposa.JPG",
    "width": 360,
    "height": 480,
    "alt": "",
    "span": "span-6",
    "size": "tall",
    "eager": false
  },
  {
    "src": "/imgs/GioielliPerle.JPG",
    "width": 1200,
    "height": 1600,
    "alt": "",
    "span": "span-6",
    "size": "tall",
    "eager": false
  },
  {
    "src": "/imgs/IMG_1333.JPG",
    "width": 3264,
    "height": 2448,
    "alt": "",
    "span": "span-6",
    "size": "med",
    "eager": false
  },
  {
    "src": "/imgs/IMG_1594.JPG",
    "width": 3264,
    "height": 2448,
    "alt": "",
    "span": "span-6",
    "size": "med",
    "eager": false
  },
  {
    "src": "/imgs/IMG_2095.jpg",
    "width": 3024,
    "height": 4032,
    "alt": "",
    "span": "span-6",
    "size": "tall",
    "eager": false
  },
  {
    "src": "/imgs/IMG_2683.jpg",
    "width": 3024,
    "height": 4032,
    "alt": "",
    "span": "span-6",
    "size": "tall",
    "eager": false
  },
  {
    "src": "/imgs/IMG_2886.JPG",
    "width": 992,
    "height": 660,
    "alt": "",
    "span": "span-12",
    "size": "med",
    "eager": false
  },
  {
    "src": "/imgs/IMG_3403.jpg",
    "width": 3024,
    "height": 4032,
    "alt": "",
    "span": "span-6",
    "size": "tall",
    "eager": false
  },
  {
    "src": "/imgs/IMG_3410.jpg",
    "width": 3024,
    "height": 4032,
    "alt": "",
    "span": "span-6",
    "size": "tall",
    "eager": false
  },
  {
    "src": "/imgs/IMG_3439.jpg",
    "width": 3024,
    "height": 4032,
    "alt": "",
    "span": "span-6",
    "size": "tall",
    "eager": false
  },
  {
    "src": "/imgs/IMG_5148.JPG",
    "width": 3264,
    "height": 2448,
    "alt": "",
    "span": "span-6",
    "size": "med",
    "eager": false
  },
  {
    "src": "/imgs/IMG_5326.JPG",
    "width": 2448,
    "height": 3264,
    "alt": "",
    "span": "span-6",
    "size": "tall",
    "eager": false
  },
  {
    "src": "/imgs/IMG_5871.JPG",
    "width": 828,
    "height": 1071,
    "alt": "",
    "span": "span-6",
    "size": "tall",
    "eager": false
  },
  {
    "src": "/imgs/IMG_6064.JPG",
    "width": 3264,
    "height": 2448,
    "alt": "",
    "span": "span-6",
    "size": "med",
    "eager": false
  },
  {
    "src": "/imgs/IMG_7050.JPG",
    "width": 828,
    "height": 1019,
    "alt": "",
    "span": "span-6",
    "size": "tall",
    "eager": false
  },
  {
    "src": "/imgs/IMG_7406.jpg",
    "width": 1159,
    "height": 1050,
    "alt": "",
    "span": "span-6",
    "size": "med",
    "eager": false
  },
  {
    "src": "/imgs/IMG_7434.jpg",
    "width": 1170,
    "height": 1529,
    "alt": "",
    "span": "span-6",
    "size": "tall",
    "eager": false
  },
  {
    "src": "/imgs/IMG_7775.JPG",
    "width": 354,
    "height": 480,
    "alt": "",
    "span": "span-6",
    "size": "tall",
    "eager": false
  },
  {
    "src": "/imgs/IMG_7891.JPG",
    "width": 2168,
    "height": 3264,
    "alt": "",
    "span": "span-6",
    "size": "tall",
    "eager": false
  },
  {
    "src": "/imgs/IMG_8485.JPG",
    "width": 640,
    "height": 640,
    "alt": "",
    "span": "span-6",
    "size": "med",
    "eager": false
  },
  {
    "src": "/imgs/IMG_8821.jpg",
    "width": 3024,
    "height": 4032,
    "alt": "",
    "span": "span-6",
    "size": "tall",
    "eager": false
  },
  {
    "src": "/imgs/IMG_9018.JPG",
    "width": 2298,
    "height": 3033,
    "alt": "",
    "span": "span-6",
    "size": "tall",
    "eager": false
  },
  {
    "src": "/imgs/IMG_9143.jpg",
    "width": 3024,
    "height": 4032,
    "alt": "",
    "span": "span-6",
    "size": "tall",
    "eager": false
  },
  {
    "src": "/imgs/IMG_9415.JPG",
    "width": 3264,
    "height": 2448,
    "alt": "",
    "span": "span-6",
    "size": "med",
    "eager": false
  },
  {
    "src": "/imgs/IMG_9420.jpg",
    "width": 3024,
    "height": 4032,
    "alt": "",
    "span": "span-6",
    "size": "tall",
    "eager": false
  },
  {
    "src": "/imgs/IMG_9972.JPG",
    "width": 960,
    "height": 640,
    "alt": "",
    "span": "span-12",
    "size": "med",
    "eager": false
  },
  {
    "src": "/imgs/SfilataDolceGabbana.JPG",
    "width": 640,
    "height": 960,
    "alt": "",
    "span": "span-6",
    "size": "tall",
    "eager": false
  },
  {
    "src": "/imgs/SpillaGioiello.JPG",
    "width": 1600,
    "height": 1200,
    "alt": "",
    "span": "span-6",
    "size": "med",
    "eager": false
  },
  {
    "src": "/imgs/VogueSposa.JPG",
    "width": 1066,
    "height": 1600,
    "alt": "",
    "span": "span-6",
    "size": "tall",
    "eager": false
  },
  {
    "src": "/imgs/VogueSposaAfrica.JPG",
    "width": 364,
    "height": 480,
    "alt": "",
    "span": "span-6",
    "size": "tall",
    "eager": false
  },
  {
    "src": "/imgs/VogueSposaIkebana.JPG",
    "width": 348,
    "height": 480,
    "alt": "",
    "span": "span-6",
    "size": "tall",
    "eager": false
  },
  {
    "src": "/imgs/cerchiettoGioiello.JPG",
    "width": 900,
    "height": 1600,
    "alt": "",
    "span": "span-6",
    "size": "tall",
    "eager": false
  },
  {
    "src": "/imgs/gioielliZar.JPG",
    "width": 1200,
    "height": 1600,
    "alt": "",
    "span": "span-6",
    "size": "tall",
    "eager": false
  }
];

  // ── GRID ─────────────────────────────────────────────────────────────────

  function renderGallery() {
    var grid = document.getElementById('portfolio-grid');
    if (!grid) return;

    var html = ITEMS.map(function (item, idx) {
      var loading = item.eager ? 'eager' : 'lazy';
      var fetchAttr = item.eager ? ' fetchpriority="high"' : '';

      return '<figure class="port-item ' + item.span + ' ' + item.size + '"' +
          ' data-lb-idx="' + idx + '" style="cursor:pointer;" tabindex="0"' +
          ' role="button" aria-label="Foto ' + (idx + 1) + '">' +
        '<img src="' + item.src + '" loading="' + loading + '"' + fetchAttr +
          ' decoding="async" width="' + item.width + '" height="' + item.height +
          '" alt="' + item.alt + '">' +
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
        if (fig) { e.preventDefault(); openLightbox(parseInt(fig.getAttribute('data-lb-idx'), 10)); }
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
      if (e.key === 'Escape')           closeLightbox();
      else if (e.key === 'ArrowLeft')   navigate(-1);
      else if (e.key === 'ArrowRight')  navigate(1);
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
