# HTML/DOM IoT Element Factories

Collections of HTML/DOM element factories for IoT systems by domain (home, retail, hospitality, etc.).

Elements refer to a single node in the HTML document structure, typically representing part of the logical structure (e.g. `<iot-room></iot-room>`, `<iot-door/>`, `<iot-wardrobe></iot-wardrobe>`).

Element classes are required to implement their specific behaviors. For example, "a door element should fire a `change` event when its state changes from `locked=true` to `locked=false` and vice versa".

Elements are organized by domain because their meaning may change depending on the domain of application.

## Installation

```
npm install iot-elements-node
```

## Usage

### Import domain-specific collections

```
import { retailElementFactoryCollection } from 'iot-elements-node';
import { homeElementFactoryCollection } from 'iot-elements-node';
import { hospitalityElementFactoryCollection } from 'iot-elements-node';
```

Then you can use them in your IoT system HTML:
```
<html>
    <iot-section>
        <iot-aisle id="aisle6" name="Coffee, Hot Beverages, Cookies & Chocolate">

            <iot-ihubx24-button-binding id="a6ButtonBinding" location="/dev/ihubx24-sim0">
            <iot-ohubx24-color-binding id="a6RelayBinding" channels-per-element="2" location="/dev/ohubx24-sim0">

            <iot-button id="a6Product1Button" shelving-unit-id="a6L1" binding="a6ButtonBinding">
            <iot-button id="a6Product2Button" shelving-unit-id="a6L2" binding="a6ButtonBinding">

            <iot-shelving-unit id="a6L1" name="Ground Coffee" style="background-color:white;" binding="a6RelayBinding:0">
            <iot-shelving-unit id="a6L2" name="Coffee Pods & K-Cups" 

            <iot-my-element></iot-my-element>

        </iot-aisle>
    </iot-section>
</html>
```

Pass the collections to the DOMIoT (you can pass none, one or more element factory collections to the DOMIoT.):

```
const domiot = new DOMIoT(html, [retailElementFactoryCollection, myElementFactoryCollection]);
const document = domiot.window.document;

const button = document.getElementById('a6Product2Button');

button.addEventListener('press', (ev) => {
    const shelvingUnitId = ev.target.getAttribute('shelving-unit-id');
    if (!shelvingUnitId) return;

    const shelvingUnit = document.getElementById(shelvingUnitId);
    if (!shelvingUnit) return;

    // change the color of the shelving unit to blue,
    // this changes the light color.
    shelvingUnit.style.setProperty('color','blue');

});

...

```

### Import individual element creators

Useful for creating your own collections (see below).

```
import { createHTMLIoTButtonElement, createHTMLIoTAisleElement } from 'iot-elements-node/retail';
import { createHTMLIoTLampElement, createHTMLIoTRoomElement } from 'iot-elements-node/home';
import { createHTMLIoTDoorElement, createHTMLIoTCurtainElement } from 'iot-elements-node/hospitality';
```

## Create your collections using `HTMLElementFactoryCollection`

You can create your own collection of element factories using `HTMLElementFactoryCollection`

Example:

```
'use strict';
import { HTMLElementFactoryCollection } from 'iot-elements-node';

import {
    createHTMLIoTAisleElement,
    createHTMLIoTShelvingUnitElement,
    createHTMLIoTButtonElement,
    createHTMLIoTVideoElement,
    createHTMLIoTAudioElement
} from 'iot-elements-node/retail';

const myElementFactoryCollection = new HTMLElementFactoryCollection();

myElementFactoryCollection.add('iot-aisle', createHTMLIoTAisleElement);
myElementFactoryCollection.add('iot-shelving-unit', createHTMLIoTShelvingUnitElement);
myElementFactoryCollection.add('iot-button', createHTMLIoTButtonElement);
myElementFactoryCollection.add('iot-video', createHTMLIoTVideoElement);
myElementFactoryCollection.add('iot-audio', createHTMLIoTAudioElement);
```

- `add(tagName, elementFactory)` - Add an element factory
- `remove(tagName)` - Remove an element factory
- `get(tagName)` - Get an element factory
- Iterable (supports `for...of` loops):
```
for (const [tagName, elementFactory] of collection) {
    ...
}
```

## Domain-specific collections

### Retail
`createHTMLIoTAisleElement`

`createHTMLIoTButtonElement`

`createHTMLIoTShelvingUnitElement`

`createHTMLIoTAudioElement`

`createHTMLIoTVideoElement`

### Home
`createHTMLIoTRoomElement`

`createHTMLIoTWindowElement`

`createHTMLIoTCurtainElement`

`createHTMLIoTLampElement`

`createHTMLIoTAudioElement`

`createHTMLIoTVideoElement`

### Hospitality
`createHTMLIoTRoomElement`

`createHTMLIoTDoorElement`

`createHTMLIoTWindowElement`

`createHTMLIoTCurtainElement`

`createHTMLIoTLampElement`

`createHTMLIoTAudioElement`

`createHTMLIoTVideoElement`

## License

MIT.