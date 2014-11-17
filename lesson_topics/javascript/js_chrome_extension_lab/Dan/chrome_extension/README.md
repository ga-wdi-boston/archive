Chrome Extension
======

## Overview

Chrome extensions are a combination of HTML, CSS, and JavaScript.

In this folder is a modified sample extension taken from the [official samples](https://developer.chrome.com/extensions/samples).

Each extension has a file, **manifest.json**, which specifies the extension's name, description, associated files, and permissions required. This file is written in JSON, a structured data format that uses the same syntax as a JavaScript object.


## Goals

- Understand how a Chrome extension works.

- Understand how JavaScript can be injected into a website to affect its DOM.

- Use JavaScript events to add functionality to a Chrome extension.

- Read and apply the chrome.tabs JavaScript API documentation.


## Challenges

Using the [*chrome.tabs* documentation](https://developer.chrome.com/extensions/), complete the following challenges.

For each challenge, add a button and click handler.


**1. Add a new color selection, e.g. white.**

- *Hint:* You will only need to update the HTML/CSS. Make sure you understand why!

**2. Load your favorite website in the current tab.**

- *Hint:* Use chrome.tabs.update, with the 'url' parameter

**3. Add a highlight button that highlights the text in all <p> tags.**

- *Hint:* Use chrome.tabs.executeScript. In the script, select all p tags by using document.getElementsByTagName. Then, for each tag, change its backgroundColor style in a for loop.

**4. Add a button that removes all of the images from the page.**

- *Hint:* Similarly to #3, change the .src property to ''.

**5. Add a feature which moves the active tab to the end of the tab list.**

- *Hint:* Pass a callback to the getActiveTabId function. Inside the callback, using the active tab's ID, call chrome.tabs.move.

**6. Add a feature which closes all open tabs EXCEPT for the current active tab.**

- *Hint:* Use chrome.tabs.query and chrome.tabs.remove.
