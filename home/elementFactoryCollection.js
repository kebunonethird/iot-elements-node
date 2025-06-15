'use strict';
import HTMLElementFactoryCollection from '../HTMLElementFactoryCollection.js';


import createHTMLIoTRoomElement from './HTMLIoTRoomElement.js';
import createHTMLIoTWindowElement from './HTMLIoTWindowElement.js';
import createHTMLIoTCurtainElement from './HTMLIoTCurtainElement.js';
import createHTMLIoTLampElement from './HTMLIoTLampElement.js';
import createHTMLIoTVideoElement from './HTMLIoTVideoElement.js';
import createHTMLIoTAudioElement from './HTMLIoTAudioElement.js';

const elementFactoryCollection = new HTMLElementFactoryCollection();
export default elementFactoryCollection;

elementFactoryCollection.add('iot-room', createHTMLIoTRoomElement);
elementFactoryCollection.add('iot-window', createHTMLIoTWindowElement);
elementFactoryCollection.add('iot-curtain', createHTMLIoTCurtainElement);
elementFactoryCollection.add('iot-lamp', createHTMLIoTLampElement);
elementFactoryCollection.add('iot-video', createHTMLIoTVideoElement);
elementFactoryCollection.add('iot-audio', createHTMLIoTAudioElement);
