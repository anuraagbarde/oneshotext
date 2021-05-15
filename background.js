
chrome.runtime.onMessage.addListener((msg, sender) => {
    // console.log("background.js");
    // First, validate the message's structure.
    if ((msg.from === 'content') && (msg.subject === 'showPageAction')) {
      // Enable the page-action for the requesting tab.
      chrome.pageAction.show(sender.tab.id);
    }
  });