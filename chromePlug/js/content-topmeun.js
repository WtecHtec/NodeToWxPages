// 创建一个顶部
function createTopMeun() {
  let topMeun = $('<div></div>')
  topMeun.attr('id', 'hzTop')
  topMeun.addClass('hz-main-top')

  topMeun.append(createMeun())

  topMeun.append(createCodeMeun())
  return topMeun
}

function createMeun() {
  let img = createImg('/img/icon/meun.png')
  img.attr('id', 'hzMeun')
  return img
}

/**
 * 顶部菜单事件
 */
function bindMeunEvent() {
  $('#hzMeun').on('click', () => {
    $("#hzContent").toggle("slow");
  })
}

function createCodeMeun() {
  let codeImg = createImg('/img/icon/code.png')
  codeImg.attr('id', 'hzCode')
  return codeImg
}
/**
 * 顶部code事件
 */
function bindCodeImgEvent() {
  $('#hzCode').on('click', () => {
    let pageData = JSON.stringify(getCodeByJson())
    if (pageData) {
      let name = prompt("请输页面名字");
      if (name != null && name != "") {
        getServer(pageData, name + new Date().getTime())
      } else {
        window.alert('页面名字不能为空')
      }
    } else {
      window.alert('无页面内容')
    }
  })
}

function getCodeByJson() {
  let keys = Object.keys(targetDataObj)
  if (keys.length === 0) return null
  let result = JSON.parse(JSON.stringify(defaultPageInfo))
  $(`#hzFrame .hz-frame-block`).each((index, el) => {
    let element = $(el)
    let id = element.attr('id')
    result.childrens.push(targetDataObj[id])
  })
  return result
}

function getServer(pageData, name) {
  $.ajax({
    url: Config.baseUrl + '/export',
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
      if (res && res.status === 200) {
        download(name)
      } else {
        window.alert(res.msg)
      }
    },
  })
}

