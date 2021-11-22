
initPopup()

async function initPopup() {

    let storageStatus = await getStorage('plugStatus')
    if (storageStatus) {
        $('#status').attr('checked', 'checked')
    }
    $('#status').on('change', async () => {
        console.log('popup', $('#status:checked').val())
        let value = $('#status:checked').val() == 1
        await saveStorage('plugStatus', value)
        sendMessageToContentScript({ cmd: 'status', value, }, function (response) {
            console.log('来自content的回复：' + response);
        });
    })
}

// 与 content-script 通信
function sendMessageToContentScript(message, callback) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, message, function (response) {
            if (callback) callback(response);
        });
    });
}
