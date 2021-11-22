// 创建一个img
function createImg(url){
  var imgURL = chrome.extension.getURL(url);
  let image = $('<img />')
  image.attr('src', imgURL)
  return image
}