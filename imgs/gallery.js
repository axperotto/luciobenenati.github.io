(function () {
  'use strict';

  // ── GRID ─────────────────────────────────────────────────────────────────

  function renderGallery(items) {
    var grid = document.getElementById('portfolio-grid');
    if (!grid) return;

    var html = items.map(function (item, idx) {
      var loading = item.eager ? 'eager' : 'lazy';
      var fetchAttr = item.eager ? ' fetchpriority="high"' : '';
      var alt = item.alt || '';

      var posStyle = item.pos ? 'object-position:' + item.pos + ';' : '';

      return '<figure class="port-item ' + item.span + ' ' + item.size + '"' +
          ' data-lb-idx="' + idx + '" style="cursor:pointer;" tabindex="0"' +
          ' role="button" aria-label="Foto ' + (idx + 1) + '">' +
        '<img src="' + item.src + '" loading="' + loading + '"' + fetchAttr +
          ' decoding="async" width="' + item.width + '" height="' + item.height +
          '" style="' + posStyle + '" alt="' + alt + '">' +
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
      if (fig) openLightbox(parseInt(fig.getAttribute('data-lb-idx'), 10), items);
    });
    grid.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        var fig = e.target.closest('[data-lb-idx]');
        if (fig) { e.preventDefault(); openLightbox(parseInt(fig.getAttribute('data-lb-idx'), 10), items); }
      }
    });
  }

  // ── LIGHTBOX ─────────────────────────────────────────────────────────────

  var lbItems = [];
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
      if (e.key === 'Escape')          closeLightbox();
      else if (e.key === 'ArrowLeft')  navigate(-1);
      else if (e.key === 'ArrowRight') navigate(1);
    });

    lbOverlay.addEventListener('touchstart', function (e) {
      touchStartX = e.changedTouches[0].clientX;
    }, { passive: true });
    lbOverlay.addEventListener('touchend', function (e) {
      var dx = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(dx) > 50) navigate(dx < 0 ? 1 : -1);
    }, { passive: true });
  }

  function openLightbox(idx, items) {
    if (!lbOverlay) return;
    lbItems = items;
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
    lbCurrent = (lbCurrent + dir + lbItems.length) % lbItems.length;
    showImage();
  }

  function showImage() {
    var item = lbItems[lbCurrent];
    lbImg.src = item.src;
    lbImg.alt = item.alt || '';
    lbCounter.textContent = (lbCurrent + 1) + ' / ' + lbItems.length;
  }

  // ── INIT ─────────────────────────────────────────────────────────────────

  function init() {
    initLightbox();
    // Absolute path works from both / (IT) and /en/ (EN) pages
    fetch('/imgs/gallery.json')
      .then(function (res) {
        if (!res.ok) throw new Error('gallery.json fetch failed: ' + res.status);
        return res.json();
      })
      .then(renderGallery)
      .catch(function (err) { console.error(err); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

}());
