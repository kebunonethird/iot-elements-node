'use strict';
const createHTMLIoTButtonElement = (window) => {
    return class HTMLIoTButtonElement extends window.HTMLElement {
        constructor() {
            super();
        }
    };
};
export default createHTMLIoTButtonElement;
