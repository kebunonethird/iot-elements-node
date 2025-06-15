'use strict';
const createHTMLIoTCurtainElement = (window) => {
    return class HTMLIoTCurtainElement extends window.HTMLElement {
        constructor() {
            super();
        }
    };
};
export default createHTMLIoTCurtainElement;
