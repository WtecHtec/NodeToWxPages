
// 创建一个工作面板
function createMain() {
    let frame = $('<div></div>')
    frame.attr('id', 'hzMain')
    frame.addClass('hz-main')
    return frame
}

// 创建工作区
function createContent() {
    let content = $('<div></div>')
    content.attr('id', 'hzContent')
    content.addClass('hz-content')
    content.append(createMater())
    content.append(createDrawFrame())
    content.append(createOptDom())
    return  content
}
/**
 *  绑定dom事件
 */
function bindEvents(){
  setMaterDrage()
  setDrawDrage()
  bindMeunEvent()
  bindCodeImgEvent()
  bindPropsSaveBtn()
}

// 渲染到页面
async function render() {
    let mainFrame = createMain()
    mainFrame.append(createTopMeun())
    mainFrame.append(createContent())
    await setFrameVisbi(mainFrame)
    $('body').append(mainFrame)
    bindEvents()
}

// 设置工作面板是否显示
async function setFrameVisbi(frame) {
    let status = await getStorage('plugStatus')
    status ? frame.show() : frame.hide()
}

render()
