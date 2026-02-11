/* Style loader – Wii U detection. Swaps to wiiu.css on Wii U browser. */
(function () {
  if (/Nintendo WiiU/i.test(navigator.userAgent)) {
    var main = document.getElementById('main-styles');
    if (main) main.disabled = true;
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/wiiu.css';
    document.head.appendChild(link);
    document.documentElement.className = 'wiiu';
    var vp = document.querySelector('meta[name="viewport"]');
    if (vp) vp.content = 'width=980';
  }
})();
