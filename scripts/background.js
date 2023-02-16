chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setBadgeText({
        text: "Short",
    });
});

chrome.action.onClicked.addListener(
    (tab) => {
        if (tab.url === "https://www.youtube.com/feed/subscriptions") {
            chrome.tabs.sendMessage(tab.id, {});
        }
    }
);