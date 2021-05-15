// console.log("global popup.js")
// Update the relevant fields with the new data.

const setDOMInfo = info => {
  const SERVERURL = "https://bardecollegedemo.herokuapp.com/crx/name";
  fetch(SERVERURL, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ "personName": info.personName })
  })
    .then(res => res.json())
    .then(data => document.getElementById('personName').innerText = data.customGreeting)
    .then(_ => document.getElementsByClassName('c-inline-spinner')[0].remove());
};

// Once the DOM is ready...
window.addEventListener('DOMContentLoaded', () => {
  // ...query for the active tab...
  // console.log("domcontentloaded popup.js")
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, tabs => {
    // ...and send a request for the DOM info...
    chrome.tabs.sendMessage(
      tabs[0].id,
      { from: 'popup', subject: 'DOMInfo' },
      // ...also specifying a callback to be called 
      //    from the receiving end (content script).
      setDOMInfo);
  });
});