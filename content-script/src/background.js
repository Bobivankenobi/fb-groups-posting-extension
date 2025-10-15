chrome.runtime.onInstalled.addListener(() => {

  console.log("[SW] Extension installed and default settings saved.");
});

// Handle screenshot & analysis request
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log("📩 BG received message:", request);


  // 📸 NEW HANDLER — called from content.js for each tweet
  if (request.action === "captureAndAnalyzeRaw") {


    return true;
  }
});
