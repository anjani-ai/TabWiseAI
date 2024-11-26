// Function to extract text content or metadata from the page
function extractContent() {
  const title = document.title;
  const bodyText = document.body.innerText.slice(0, 200); // Extract first 200 characters
  return { title, bodyText };
}

// Send extracted content to background script for processing
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "extract_content") {
    const content = extractContent();
    sendResponse(content);
  }
});
