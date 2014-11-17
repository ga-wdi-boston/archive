
var featureHandler = 
{
  "load-site": function loadSite() {
      // Load a website into active tab
      chrome.tabs.update(null, {url: 'http://google.com'});
    },

  "remove-imgs": function removeImages() {
    // Make all images on the page disappear
    chrome.tabs.executeScript(null,
      {code:
        "var imgs = document.getElementsByTagName('img');  \
         for (var i=0; i<imgs.length; i++) {               \
          imgs[i].src = '';                                \
         }                                                 \
       "});
    },

  "highlight-ps": function highlightParagraphs() {
    // Highlight all paragraphs (<p> tags)
    chrome.tabs.executeScript(null,
      {code:
        "var imgs = document.getElementsByTagName('p');  \
         for (var i=0; i<imgs.length; i++) {             \
          imgs[i].style.backgroundColor = 'yellow';      \
         }                                               \
       "});
    },

  "move-tab": function moveTabToEnd() {
      // Move the active tab to the end of the tab list
      getActiveTabId(function moveActiveTab(tabId) {
        chrome.tabs.move(tabId, {index: -1});
      });
    },

  "close-tabs": function closeOtherTabs() {
      // Close all tabs except for the active tab
      chrome.tabs.query({ currentWindow: true, active: false }, function (tabs) {
        for (var i=0; i<tabs.length; i++) {
          chrome.tabs.remove(tabs[i].id);
        }
      });

    }
}


// Changes the background color of the active tab
function updateColor(e) 
{
  // dataset contains all data-* attributes
  var elementColor = e.target.dataset["color"];

  // Execute JS in the currently active tab (indicated by the null first parameter)
  // (extend quotes over multiple lines by placing \ at the end of the line)
  chrome.tabs.executeScript(null,
      {code:"document.body.style.backgroundColor='" + elementColor + "'"});

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


  // Add click handlers for each button
  var btns = document.querySelectorAll('#more-features button');

  for (var i = 0; i < btns.length; i++) {
    var featureType = btns[i].dataset["feature"];
    btns[i].addEventListener('click', featureHandler[featureType]);
  }


  // Display the active tab ID to the console
  getActiveTabId(function logID(tabId) { 
    console.log("The active tab ID is " + tabId); 
  });
}


document.addEventListener('DOMContentLoaded', function() {
	startup();
});

