chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
{
	// console.log(sender.tab ?"from a content script:" + sender.tab.url :"from the extension");
	if(request.cmd == 'status') {
        setFrameVisbiByMsg(request.value)
    }
});
/**
 *  临时操作是否显示面板
 * @param {*} value 
 */
function setFrameVisbiByMsg(value) {
    let frame = $('#hzMain')
    value ? frame.show() : frame.hide()
}
