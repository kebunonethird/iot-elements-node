'use strict';
const createHTMLIoTAudioElement = (window) => {
    return class HTMLIoTAudioElement extends window.HTMLElement {
        constructor() {
            super();
        }
    };
};
export default createHTMLIoTAudioElement;
