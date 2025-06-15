'use strict';
const createHTMLIoTVideoElement = (window) => {
    return class HTMLIoTVideoElement extends window.HTMLElement {
        constructor() {
            super();
        }
    };
};
export default createHTMLIoTVideoElement;
