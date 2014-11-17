// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


// Changes the background color of the active tab
function updateColor(e) 
{
  // dataset contains all data-* attributes
  var elementColor = e.target.dataset["color"];

  // Execute JS in the currently active tab (indicated by the null first parameter)
  // (extend quotes over multiple lines by placing \ at the end of the line)
  chrome.tabs.executeScript(null,
      {code:"document.body.style.backgroundColor='" + elementColor + "';"});

  window.close();
}



// Gets the ID of the active tab and passes it to the callback function
// Callback function(tabId) { ... }
function getActiveTabId(callback)
{
  // Get the active tab ID and log it
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    if (tabs.length > 0) {
      var activeTabId = tabs[0].id;
      
      callback(activeTabId);
    }
  });
}


// Initializes the extension -- assumes DOM is loaded
function startup()
{
  // Add an click handler to every li in #color-list
  var lis = document.querySelectorAll('#color-list li');

  for (var i = 0; i < lis.length; i++) {
    lis[i].addEventListener('click', updateColor);
  }


  // Display the active tab ID to the console
  getActiveTabId(function logID(tabId) { 
    console.log("The active tab ID is " + tabId); 
  });
}


document.addEventListener('DOMContentLoaded', function() {
  startup();
});

