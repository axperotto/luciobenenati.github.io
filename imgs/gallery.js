(function () {
  'use strict';

  function renderGallery(items) {
    var grid = document.getElementById('portfolio-grid');
    if (!grid) return;

    var lang = document.documentElement.lang || 'it';

    var html = items.map(function (item) {
      var loading = item.eager ? 'eager' : 'lazy';
      var fetchAttr = item.eager ? ' fetchpriority="high"' : '';
      var alt = (lang === 'en' && item.altEn) ? item.altEn : item.alt;

      var srcWebp = /\.[^./]+$/.test(item.src) ? item.src.replace(/\.[^.]+$/, '.webp') : '';
      var sourceTag = srcWebp ? '<source srcset="' + srcWebp + '" type="image/webp">' : '';

      return '<figure class="port-item ' + item.span + ' ' + item.size + '">' +
        '<a href="' + item.src + '"' +
          ' data-pswp-width="' + item.width + '"' +
          ' data-pswp-height="' + item.height + '"' +
          ' target="_blank">' +
          '<picture>' +
            sourceTag +
            '<img src="' + item.src + '" loading="' + loading + '"' + fetchAttr +
              ' decoding="async" width="' + item.width + '" height="' + item.height +
              '" alt="' + alt + '">' +
          '</picture>' +
        '</a>' +
      '</figure>';
    }).join('');

    grid.innerHTML = html;

    // Stagger-fade items in after injection so they are always visible
    // regardless of scroll position when the fetch resolves.
    grid.querySelectorAll('.port-item').forEach(function (el, i) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity .6s ease, transform .6s ease';
      setTimeout(function () {
        el.style.opacity = '';
        el.style.transform = '';
      }, 60 + i * 40);
    });

    // Initialize PhotoSwipe lightbox once scripts are loaded.
    // PhotoSwipe is loaded with defer so we wait for DOMContentLoaded/load.
    function initLightbox() {
      if (typeof PhotoSwipeLightbox === 'undefined') return;
      var lightbox = new PhotoSwipeLightbox({
        gallery: '#portfolio-grid',
        children: 'a[data-pswp-width]',
        pswpModule: PhotoSwipe,
        bgOpacity: 0.92,
        padding: { top: 20, bottom: 20, left: 20, right: 20 }
      });
      lightbox.init();
    }

    if (document.readyState === 'complete') {
      initLightbox();
    } else {
      window.addEventListener('load', initLightbox);
    }
  }

  // Absolute path works from both / (IT) and /en/ (EN) pages, while a relative
  // path would resolve differently depending on the page's directory depth.
  fetch('/imgs/gallery.json')
    .then(function (res) {
      if (!res.ok) throw new Error('Gallery fetch failed: ' + res.status);
      return res.json();
    })
    .then(renderGallery)
    .catch(function (err) { console.error(err); });
}());

