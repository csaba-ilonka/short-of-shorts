function removeShorts() {
    console.log("Removing Shorts...")
    Array.from(document.getElementsByTagName("ytd-grid-video-renderer"))
        .filter((e) => e.querySelector("[overlay-style=SHORTS]"))
        .forEach((e) => e.remove());
}

chrome.runtime.onMessage.addListener(
    (message, sender, response) => removeShorts()
);