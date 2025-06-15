'use strict';
const createHTMLIoTWindowElement = (window) => {
    return class HTMLIoTWindowElement extends window.HTMLElement {
        constructor() {
            super();
        }
    };
};
export default createHTMLIoTWindowElement;
