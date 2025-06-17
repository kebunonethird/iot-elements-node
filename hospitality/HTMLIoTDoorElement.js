'use strict';
const createHTMLIoTDoorElement = (window) => {
    return class HTMLIoTDoorElement extends window.HTMLElement {
        constructor() {
            super();
            this._lastLockedState = null;
        }

        // Only observe the locked attribute
        static get observedAttributes() {
            return ['locked'];
        }

        // Handle attribute changes and fire change event
        attributeChangedCallback(name, oldValue, newValue) {
            if (name === 'locked') {
                const currentLocked = this.locked;
                // Only fire if the actual boolean state changed
                if (this._lastLockedState !== currentLocked) {
                    this._lastLockedState = currentLocked;
                    this.dispatchEvent(new window.Event('change', { bubbles: true }));
                }
            }
        }

        // Property getter for locked state
        get locked() {
            return this.hasAttribute('locked');
        }

        // Property setter for locked state
        set locked(value) {
            if (value) {
                this.setAttribute('locked', '');
            } else {
                this.removeAttribute('locked');
            }
        }
    };
};
export default createHTMLIoTDoorElement;
