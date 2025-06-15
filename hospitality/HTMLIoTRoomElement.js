'use strict';
const createHTMLIoTRoomElement = (window) => {
    return class HTMLIoTRoomElement extends window.HTMLElement {
        constructor() {
            super();
        }
    };
};
export default createHTMLIoTRoomElement;
