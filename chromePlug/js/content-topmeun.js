// 创建一个顶部
function createTopMeun() {
  let topMeun = $('<div></div>')
  topMeun.attr('id', 'hzTop')
  topMeun.addClass('hz-main-top')
  
  topMeun.append(createMeun())
  
  topMeun.append(createCodeMeun())
  return topMeun
}

function createMeun(){
  let img =  createImg('/img/icon/meun.png')
  img.attr('id', 'hzMeun')
  return img
}

/**
 * 顶部菜单事件
 */
function bindMeunEvent(){
  $('#hzMeun').on('click', ()=> {
    $("#hzContent").toggle("slow");
  })
}

function createCodeMeun(){
  let codeImg =  createImg('/img/icon/code.png')
  codeImg.attr('id', 'hzCode')
  return codeImg
}
/**
 * 顶部code事件
 */
function bindCodeImgEvent() {
  $('#hzCode').on('click', ()=> {
    let pageData = JSON.stringify(getCodeByJson())
    console.log('bindCodeImgEvent====', pageData)
    getServer(pageData, new Date().getTime())
  })
}

function getCodeByJson() {
  let keys = Object.keys(targetDataObj)
  if (keys.length === 0) return null
  let result = JSON.parse(JSON.stringify(defaultPageInfo))
  keys.forEach(item=> {
    result.childrens.push(targetDataObj[item])
  })
  return result
}

function getServer(pageData, name) {
    $.ajax({
        url: 'http://localhost:3000/export',
        type: 'POST',
        contentType: "application/json",
        headers: {
          'Content-Type': 'application/json'
        },
        data: JSON.stringify({
          name,
          data: JSON.parse(pageData)
        }),
        success: function (res) {
            console.log('getServer ===', res)
            // window.open('http://localhost:3000/download', '_self')
            if(res && res.status === 200 ) {
              download(name)
            }
        },
    })
}

