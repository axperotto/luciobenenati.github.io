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
      var title = lang === 'en' ? (item.titleEn || item.title) : item.title;
      var desc = lang === 'en' ? (item.descEn || item.desc) : item.desc;

      var srcWebp = /\.[^./]+$/.test(item.src) ? item.src.replace(/\.[^.]+$/, '.webp') : '';
      var sourceTag = srcWebp ? '<source srcset="' + srcWebp + '" type="image/webp">' : '';

      return '<figure class="port-item ' + item.span + ' ' + item.size + ' reveal">' +
        '<picture>' +
          sourceTag +
          '<img src="' + item.src + '" loading="' + loading + '"' + fetchAttr +
            ' decoding="async" width="' + item.width + '" height="' + item.height +
            '" alt="' + alt + '">' +
        '</picture>' +
        '<figcaption class="port-caption">' +
          '<div class="cap-title">' + title + '</div>' +
          '<div class="cap-desc">' + desc + '</div>' +
        '</figcaption>' +
      '</figure>';
    }).join('');

    grid.innerHTML = html;

    // Observe new reveal elements for scroll animation, staggering items that
    // enter the viewport at the same time by 80 ms each.
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry, i) {
        if (entry.isIntersecting) {
          setTimeout(function () { entry.target.classList.add('visible'); }, i * 80);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    grid.querySelectorAll('.reveal').forEach(function (el) { obs.observe(el); });
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
