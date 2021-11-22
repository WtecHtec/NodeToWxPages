

    // 存储
function saveStorage(key, value) {
    let strogeInfo = {}
   strogeInfo[key] = value
   // 使用 Chrome 扩展程序的存储 API 保存它。
   return new Promise((resolve, reject)=> {
       chrome.storage.sync.set(strogeInfo, function() {
           resolve()
       });
   }) 
 }

 // 获取
 function getStorage(key){
     return new Promise((resolve, reject)=> {
        chrome.storage.sync.get(key, (items)=>{
            resolve(items[key])
        })
     })
 }



