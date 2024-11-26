document.getElementById("categorizeButton").addEventListener("click", () => {
  chrome.tabs.query({}, (tabs) => {
    tabs.forEach((tab) => {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: extractContent
      }, (results) => {
        const tabContent = results[0].result;
        console.log("Tab content:", tabContent);
        categorizeTab(tabContent, tab.id);
      });
    });
  });
});

function categorizeTab(content, tabId) {
  // Placeholder: categorize tab based on content
  const category = content.bodyText.includes("work") ? "Work" : "Entertainment";
  chrome.scripting.executeScript({
    target: { tabId: tabId },
    func: highlightCategory,
    args: [category]
  });
}

function highlightCategory(category) {
  document.body.style.border = "5px solid " + (category === "Work" ? "green" : "blue");
}
