(function () {
    'use strict';

    fetch('https://nb557.github.io/plugins/online_mod.js')
        .then(function (response) {
            if (!response.ok) throw new Error('HTTP ' + response.status);
            return response.text();
        })
        .then(function (js) {
            js = js
                .replace("var isAndroid = Lampa.Platform.is('android');", 'var isAndroid = true;')
                .replace(/var\s+collapsBlocked\s*=\s*[^;]+;/, 'var collapsBlocked = false;');

            var script = document.createElement('script');
            script.text = js;
            document.head.appendChild(script).remove();
        })
        .catch(function (error) {
            console.error('Failed to load online_mod.js:', error);
        });
})();
