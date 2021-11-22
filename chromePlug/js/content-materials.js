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
        "data-key": data[j].key,
        "data-path": data[j].path,
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
    helper: "clone",
    revert: "invalid"
  });
}

