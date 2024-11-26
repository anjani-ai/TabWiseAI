chrome.runtime.onInstalled.addListener(() => {
  console.log("TabWise AI extension installed.");
});

chrome.tabs.onCreated.addListener((tab) => {
  console.log("New tab created:", tab);
  // Logic for analyzing the newly opened tab could go here
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete") {
    console.log("Tab updated:", tab);
    // Categorize tab or check if it's related to ongoing tasks
  }
});
