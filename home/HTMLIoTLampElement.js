'use strict';
const createHTMLIoTLampElement = (window) => {
    return class HTMLIoTLampElement extends window.HTMLElement {
        constructor() {
            super();
        }
    };
};
export default createHTMLIoTLampElement;
