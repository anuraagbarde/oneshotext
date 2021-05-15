
// console.log("global content.js")
// Inform the background page that 
// this tab should have a page-action.
chrome.runtime.sendMessage({
  from: 'content',
  subject: 'showPageAction',
});

// Listen for messages from the popup.
chrome.runtime.onMessage.addListener((msg, sender, response) => {
  // console.log("collecting info content.js")
    // First, validate the message's structure.
    if ((msg.from === 'popup') && (msg.subject === 'DOMInfo')) {
        // Collect the necessary data. 
        // (For your specific requirements `document.querySelectorAll(...)`
        //  should be equivalent to jquery's `$(...)`.)
        let personName = document.getElementsByClassName("inline t-24 t-black t-normal break-words")[0].innerText;
        
        // console.log(personName[0].innerText);
        var domInfo = {
            "personName" : personName
        }
  
      // Directly respond to the sender (popup), 
      // through the specified callback.
      response(domInfo);
    }
  });