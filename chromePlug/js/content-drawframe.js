function createDrawFrame() {
  let frame = $('<div></div>')
  frame.attr('id', 'hzFrame')
  frame.addClass('hz-frame')
  return  frame
}

/**
 * 绑定工作区拖拽事件
 */
function setDrawDrage(){
  $("#hzFrame" ).sortable({
    revert: true
  });
}

function getDrawData() {
  let imgData = $('#hzFrame img')

}

/**
 *  绑定icon组件删除事件
 */
 function bindBlockDelImg() {
  if(checkEvents(events, 'del-img')) return
  $('.del-img').off('click').on('click', (event)=> {
    let { id } = event.currentTarget.dataset;
    $(`#${id}`).remove();
    delete targetDataObj[id];
    if (currentTargetData.id === id) {
      clearOptContent()
      targetBlockProps = []
      currentTargetData = {}
      $('.hz-opt-header').hide()
    }
  })
}

/**
 * 绑定目标物料点击事件
 */
function bindTargetBlock() {
  if(checkEvents(events, 'hz-frame-block')) return
  $('.hz-frame-block').off('click').on('click', (event)=> {
    let id = $(event.currentTarget).attr('id');
    setOptHeaderShow()
    setTargetBlockActive(id)
    targetBlockProps = getBlockProperties(id)
    currentTargetData = targetDataObj[id]
    renderPropDom(id)
  })
}

function setTargetBlockActive(id){
  $('.-img-active').removeClass('-img-active')
  $(`#${id}`).addClass('-img-active')
}

function setOptHeaderShow(){
  $('.hz-opt-header').show()
}
/**
 *  获取组件prop配置
 * @param {*} id 
 * @returns 
 */
function getBlockProperties(id) {
  let blockProps = targetDataObj[id].properties
  let properties = [
    ...defaultProp,
  ]
  if (blockProps && blockProps.length > 0)  properties = properties.concat(blockProps)
  return properties
}