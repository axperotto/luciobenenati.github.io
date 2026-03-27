(function () {
  'use strict';

  // Renders all portfolio cards into #portfolio-grid and initialises the lightbox.
  // Image contract (enforced in gallery.json):
  //   item.thumbnail → -640.webp if available, else full .webp  (used in the grid)
  //   item.image     → full-size .webp                           (used in the lightbox)
  function renderGallery(items) {
    var grid = document.getElementById('portfolio-grid');
    if (!grid) return;

    var lang = document.documentElement.lang || 'it';

    // Build card markup for every item
    var html = items.map(function (item, i) {
      var loading    = item.eager ? 'eager' : 'lazy';
      var fetchAttr  = item.eager ? ' fetchpriority="high"' : '';
      var alt        = (lang === 'en' && item.altEn)      ? item.altEn      : item.alt;
      var title      = (lang === 'en' && item.titleEn)    ? item.titleEn    : item.title;
      var category   = (lang === 'en' && item.categoryEn) ? item.categoryEn : (item.category || '');
      var desc       = (lang === 'en' && item.descEn)     ? item.descEn     : (item.desc || '');

      // thumbnail is always .webp — no format derivation needed
      var thumb = item.thumbnail;

      var categoryHtml = category
        ? '<div class="cap-category">' + escapeHtml(category) + '</div>'
        : '';
      var descHtml = desc
        ? '<div class="cap-desc">' + escapeHtml(desc) + '</div>'
        : '';

      // data-index drives the lightbox; role+tabindex make the card keyboard-accessible
      return (
        '<figure class="port-item reveal" role="button" tabindex="0"' +
          ' aria-label="' + escapeAttr(title) + '" data-index="' + i + '">' +
          '<div class="port-thumb">' +
            '<img src="' + thumb + '" loading="' + loading + '"' + fetchAttr +
              ' decoding="async" width="' + item.width + '" height="' + item.height +
              '" alt="' + escapeAttr(alt) + '">' +
          '</div>' +
          '<figcaption class="port-caption">' +
            categoryHtml +
            '<div class="cap-title">' + escapeHtml(title) + '</div>' +
            descHtml +
          '</figcaption>' +
        '</figure>'
      );
    }).join('');

    grid.innerHTML = html;

    // Observe new .reveal elements for staggered scroll animation (80 ms per item)
    var revealObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry, i) {
        if (entry.isIntersecting) {
          setTimeout(function () { entry.target.classList.add('visible'); }, i * 80);
          revealObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    grid.querySelectorAll('.reveal').forEach(function (el) { revealObs.observe(el); });

    // ── Lightbox ────────────────────────────────────────────────────────────
    // Inject lightbox HTML into <body> once (guard against double-init)
    if (!document.getElementById('pf-lightbox')) {
      document.body.insertAdjacentHTML('beforeend',
        '<div class="pf-lightbox" id="pf-lightbox" role="dialog" aria-modal="true" aria-label="Image viewer">' +
          '<div class="pf-lightbox-inner">' +
            '<button class="pf-lightbox-close" id="pf-lb-close" aria-label="Close">&times;</button>' +
            '<img id="pf-lb-img" src="" alt="">' +
            '<div class="pf-lightbox-caption" id="pf-lb-caption"></div>' +
          '</div>' +
          '<button class="pf-lightbox-prev" id="pf-lb-prev" aria-label="Previous image">&#8592;</button>' +
          '<button class="pf-lightbox-next" id="pf-lb-next" aria-label="Next image">&#8594;</button>' +
        '</div>'
      );
    }

    var lb       = document.getElementById('pf-lightbox');
    var lbImg    = document.getElementById('pf-lb-img');
    var lbCap    = document.getElementById('pf-lb-caption');
    var lbClose  = document.getElementById('pf-lb-close');
    var lbPrev   = document.getElementById('pf-lb-prev');
    var lbNext   = document.getElementById('pf-lb-next');
    var currentIndex = 0;
    var lastFocused  = null; // element that opened the lightbox (for focus restore)

    function openLightbox(index) {
      var lang  = document.documentElement.lang || 'it';
      var item  = items[index];
      var alt   = (lang === 'en' && item.altEn)   ? item.altEn   : item.alt;
      var title = (lang === 'en' && item.titleEn) ? item.titleEn : item.title;

      currentIndex      = index;
      lbImg.src         = item.image;   // always full-size .webp
      lbImg.alt         = alt;
      lbCap.textContent = title;

      lb.classList.add('open');
      document.body.style.overflow = 'hidden';

      // Remember which card opened the lightbox so we can return focus on close
      lastFocused = document.activeElement;
      lbClose.focus();
    }

    function closeLightbox() {
      lb.classList.remove('open');
      document.body.style.overflow = '';
      if (lastFocused) lastFocused.focus();
    }

    function showPrev() {
      openLightbox((currentIndex - 1 + items.length) % items.length);
    }
    function showNext() {
      openLightbox((currentIndex + 1) % items.length);
    }

    // Open lightbox on card click / Enter / Space
    grid.querySelectorAll('.port-item').forEach(function (el) {
      el.addEventListener('click', function () {
        openLightbox(parseInt(this.getAttribute('data-index'), 10));
      });
      el.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(parseInt(this.getAttribute('data-index'), 10));
        }
      });
    });

    // Lightbox controls
    lbClose.addEventListener('click', closeLightbox);
    lbPrev.addEventListener('click', showPrev);
    lbNext.addEventListener('click', showNext);

    // Close on backdrop click (not on inner content)
    lb.addEventListener('click', function (e) {
      if (e.target === lb) closeLightbox();
    });

    // Keyboard navigation (only when lightbox is open)
    document.addEventListener('keydown', function (e) {
      if (!lb.classList.contains('open')) return;
      if (e.key === 'Escape')     { closeLightbox(); }
      if (e.key === 'ArrowLeft')  { showPrev(); }
      if (e.key === 'ArrowRight') { showNext(); }
    });

    // Touch swipe support
    var touchStartX = 0;
    lb.addEventListener('touchstart', function (e) {
      if (e.changedTouches.length) touchStartX = e.changedTouches[0].clientX;
    }, { passive: true });
    lb.addEventListener('touchend', function (e) {
      if (!e.changedTouches.length) return;
      var dx = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(dx) > 50) {
        if (dx < 0) showNext(); else showPrev();
      }
    });
  }

  // Minimal HTML-safe escape helpers (prevents XSS from JSON data)
  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }
  function escapeAttr(str) {
    return escapeHtml(str).replace(/"/g, '&quot;');
  }

  // Absolute path works from both / (IT) and /en/ (EN) pages
  fetch('/imgs/gallery.json')
    .then(function (res) {
      if (!res.ok) throw new Error('Gallery fetch failed: ' + res.status);
      return res.json();
    })
    .then(renderGallery)
    .catch(function (err) { console.error(err); });
}());
