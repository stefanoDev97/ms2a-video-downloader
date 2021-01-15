const contextMenus = {};

contextMenus.videoBuffer =
    chrome.contextMenus.create(
        {
            "title": "ms2a download video",
            'contexts': ['all']
        },
        function () {
            if (chrome.runtime.lastError) {
                console.error(chrome.runtime.lastError.message);
            }
        }
    );
chrome.contextMenus.onClicked.addListener(contextMenuHandler);

function contextMenuHandler(info, tab) {
    if (info.menuItemId === contextMenus.videoBuffer) {
        chrome.tabs.executeScript({
            file: 'js/ext.js'
        });
    }
}   