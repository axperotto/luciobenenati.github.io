/* gallery.js — dynamic portfolio rendering from /imgs/gallery.json */
(function () {
  'use strict';

  var GALLERY_JSON = '/imgs/gallery.json';

  function renderGallery(items) {
    var grid = document.getElementById('gallery-grid');
    if (!grid) return;

    var isEn = document.documentElement.lang === 'en';
    var fragment = document.createDocumentFragment();

    items.forEach(function (item) {
      var figure = document.createElement('figure');
      figure.className = 'port-item ' + item.span + ' ' + item.size + ' reveal';

      var alt = (isEn && item.alt_en) ? item.alt_en : (item.alt_it || '');

      var sourceHtml = '';
      if (item.webp_srcset) {
        var sizesAttr = item.sizes ? ' sizes="' + item.sizes + '"' : '';
        sourceHtml = '<source srcset="' + item.webp_srcset + '"' + sizesAttr + ' type="image/webp">';
      }

      var loadingAttr = item.loading || 'lazy';
      var fetchpriorityAttr = item.fetchpriority ? ' fetchpriority="' + item.fetchpriority + '"' : '';

      figure.innerHTML =
        '<picture>' +
          sourceHtml +
          '<img src="' + item.src + '" loading="' + loadingAttr + '"' + fetchpriorityAttr +
            ' decoding="async" width="' + item.width + '" height="' + item.height + '" alt="' + alt + '">' +
        '</picture>' +
        '<figcaption class="port-caption">' +
          '<div class="cap-title" data-i18n="' + item.i18n_title + '"></div>' +
          '<div class="cap-desc" data-i18n="' + item.i18n_desc + '"></div>' +
        '</figcaption>';

      fragment.appendChild(figure);
    });

    grid.appendChild(fragment);

    /* Apply translations to the newly rendered items.
     * setLang is defined in the inline <script> of each page. */
    if (typeof setLang === 'function') {
      setLang(document.documentElement.lang || 'it');
    }

    /* Observe newly added .reveal elements for scroll animation */
    var newRevealEls = Array.prototype.slice.call(grid.querySelectorAll('.reveal'));
    if (typeof IntersectionObserver !== 'undefined') {
      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var i = newRevealEls.indexOf(entry.target);
            var delay = i >= 0 ? i * 80 : 0;
            setTimeout(function () { entry.target.classList.add('visible'); }, delay);
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08 });
      newRevealEls.forEach(function (el) { obs.observe(el); });
    } else {
      newRevealEls.forEach(function (el) { el.classList.add('visible'); });
    }
  }

  function init() {
    fetch(GALLERY_JSON)
      .then(function (r) {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.json();
      })
      .then(renderGallery)
      .catch(function (err) {
        console.error('Gallery load failed:', err);
      });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
}());
