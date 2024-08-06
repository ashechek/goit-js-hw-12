'use strict';

export function toggleLoader(isVisible) {
    const loader = document.querySelector('.js-loader');
    if (loader) {
        if (isVisible) {
            loader.style.display = 'inline-block';
        } else {
            loader.style.display = 'none';
        }
    }
}