'use strict';
const createHTMLIoTAisleElement = (window) => {
    return class HTMLIoTAisleElement extends window.HTMLElement {
        constructor() {
            super();
        }
    };
};
export default createHTMLIoTAisleElement;
