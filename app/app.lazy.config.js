(() => {
    'use strict';
    
    angular.module('app').config(lazyLoad);

    lazyLoad.$inject=['$ocLazyLoadProvider'];
    function lazyLoad($ocLazyLoadProvider) {
        $ocLazyLoadProvider.config({
            debug: false,
            events: true,
            modules: [
                {
                    name: 'home',
                    files: [
                        'app/components/home/home.component.js',
                        'app/components/home/home.css'
                    ]
                },
                {
                    name: 'form',
                    files: [
                        'app/components/form/form.component.js',
                        'app/components/form/form.css'
                    ]
                }
            ]
        });
    }
})();