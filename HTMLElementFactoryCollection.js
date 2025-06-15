"use strict";

/**
 * Collection of HTMLElement factories.
 * 
 * @class HTMLElementFactoryCollection
 * @constructor
 * @param {Object} obj An object containing HTMLElement factories.
 */
export default class HTMLElementFactoryCollection {
    
    constructor(){
        this._obj = {};
    }

    /**
     * Add a new element factory to the collection.
     * 
     * @param {string} tagName The tag name of the element to be created. Example: 'iot-button'.
     * @param {function} elementFactory The factory function that creates the element.
     * @throws {Error} If the tagName is not a string or the elementFactory is not a function.
     */
    add(tagName, elementFactory){
        if (!elementFactory || typeof elementFactory !== 'function') {
            throw new Error('Only objects of type function are allowed in HTMLElementFactoryCollection.');
        }
        if (!tagName || typeof tagName !== 'string') {
            throw new Error('Mandatory tagName when adding a new element to HTMLElementFactoryCollection.');
        }
        this._obj[tagName] = elementFactory;
    }

    /**
     * Remove an element factory from the collection.
     * 
     * @param {string} tagName The tag name of the element to be removed. Example: 'iot-button'.
     */
    remove(tagName){
        delete this._obj[tagName];
    }

    /**
     * Get an element factory from the collection.
     * 
     * @param {string} tagName The tag name of the element to be retrieved. Example: 'iot-button'.
     * @returns {function} The element factory function.
     */
    get(tagName){
        return this._obj[tagName];
    }

    /**
     * Get an iterator for the collection.
     * 
     * @example
     * for (const [tagName, elementFactory] of collection) {
     *     ...
     * }
     * 
     * @returns {Object} An iterator for the collection.
     */
    [Symbol.iterator]() {
        const keys = Object.keys(this._obj);
        let index = 0;
        const obj = this._obj;

        return {
            next() {
                if (index < keys.length) {
                    const key = keys[index++];
                    return { value: [key, obj[key]], done: false };
                }
                return { done: true };
            }
        };
    }
}
