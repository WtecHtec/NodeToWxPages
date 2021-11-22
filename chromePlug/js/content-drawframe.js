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
  console.log('getDrawData===', imgData)
}