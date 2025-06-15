'use strict';
import HTMLElementFactoryCollection from '../HTMLElementFactoryCollection.js';

import createHTMLIoTAisleElement from './HTMLIoTAisleElement.js';
import createHTMLIoTShelvingUnitElement from './HTMLIoTShelvingUnitElement.js';
import createHTMLIoTButtonElement from './HTMLIoTButtonElement.js';
import createHTMLIoTVideoElement from './HTMLIoTVideoElement.js';
import createHTMLIoTAudioElement from './HTMLIoTAudioElement.js';

const elementFactoryCollection = new HTMLElementFactoryCollection();
export default elementFactoryCollection;

elementFactoryCollection.add('iot-aisle', createHTMLIoTAisleElement);
elementFactoryCollection.add('iot-shelving-unit', createHTMLIoTShelvingUnitElement);
elementFactoryCollection.add('iot-button', createHTMLIoTButtonElement);
elementFactoryCollection.add('iot-video', createHTMLIoTVideoElement);
elementFactoryCollection.add('iot-audio', createHTMLIoTAudioElement);
