function createMater() {
  let mater = $('<div></div>')
  mater.attr('id', 'hzMater')
  mater.addClass('hz-materials')
  let materFrame = setMaterData(materialsData)
  mater.append(materFrame)
  return mater
}

function setMaterData(materialsData) {
  let len = materialsData.length
  let frame = $(document.createDocumentFragment())
  for (let i = 0; i < len; i++) {
    let span = $('<div></div>')
    span.html(materialsData[i].name)
    span.addClass('hz-materials-block')
    let data = materialsData[i].data
    frame.append(span)
    for (let j = 0; j < data.length; j++) {
      let img = createImg(`/img/materials/${data[j].img}`)
      img.attr({
        "title": data[j].desc,
        "data-type": "mater",
        "data-item": JSON.stringify(data[j]),
      })
      frame.append(img)
    }
  }
  return frame
}

/**
 * 绑定物料拖拽事件
 */
function setMaterDrage() {
  $("img[data-type='mater']").draggable({
    connectToSortable: "#hzFrame",
    revert: "invalid",
    // helper: "clone",
    helper: function( event ) {
      return createHelperDom(event);
    },
    stop: (event, ui) => {
      if (ui.helper && ui.helper.length > 0 ) {
        let target = $(ui.helper[0]);
        if (checkFrame(target)) {
          targetDataObj[target.attr('id')] = {...target.data('item')};
          bindBlockDelImg();
        }
      }
    },
  });
}
/**
 * 判断是否属于在工作区
 * @param {} ui 
 * @returns 
 */
function checkFrame(target){
  let parentId = target.parent().attr('id');
  return parentId === 'hzFrame'
}
function createHelperDom(event) {
  let target = $(event.target).clone()
  target.addClass('target-img')
  let showDiv = $("<div></div>")
  let id = uuid()
  showDiv.attr({
    id,
    'data-item': JSON.stringify(target.data('item')),
  })
  showDiv.addClass('hz-frame-block')
  let img = createImg('/img/icon/del.png')
  img.addClass('del-img')
  img.attr({
    'data-id': id,
  })
  showDiv.append(img)
  showDiv.append(target)
  return showDiv;
}
/**
 *  绑定icon组件删除事件
 */
function bindBlockDelImg() {
  $('.del-img').on('click', (event)=> {
    let { id } = event.currentTarget.dataset;
    $(`#${id}`).remove();
    delete targetDataObj[id];
  })
}


