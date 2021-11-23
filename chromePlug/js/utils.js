// 创建一个img
function createImg(url){
  var imgURL = chrome.extension.getURL(url);
  let image = $('<img />')
  image.attr('src', imgURL)
  return image
}

function checkEvents(cache, key) {
  if(cache[key]) return false
  cache[key] = true
  return false
}
function uuid() {
  var s = [];
  var hexDigits = "0123456789abcdef";
  for (var i = 0; i < 36; i++) {
      s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = "-";

  var uuid = s.join("");
  return uuid;
}