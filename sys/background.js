// ------------------------------------------------------------------------- //
// File to run the some action in the background.
// ------------------------------------------------------------------------- //

chrome.runtime.onInstalled.addListener(() => {
  console.log('Extension installed');
});

// ------------------------------------------------------------------------- //