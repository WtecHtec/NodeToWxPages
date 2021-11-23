function createOptDom() {
  let dom = $('<div></div>')
  dom.attr('id', 'hzOpt')
  dom.addClass('hz-opt')
  dom.append(createOptHeader())
  dom.append(createOptContent())
  return dom
}

function createOptHeader() {
  let dom = $('<div></div>')
  dom.addClass('hz-opt-header')
  dom.append(creareOptSaveBtn())
  return dom
}

function createOptContent() {
  let dom = $('<div></div>')
  dom.attr('id', 'hzOptContent')
  dom.addClass('hz-opt-content')
  return dom
}

function creareOptSaveBtn() {
  let btn = $('<label></label>')
  btn.attr('id', 'propsSave')
  btn.html('保存')
  return btn
}

function clearOptContent() {
  $('#hzOptContent').html('')
}
function renderPropDom() {
  clearOptContent()
  $('#hzOptContent').append(getPropDom(targetBlockProps))
}

function getPropDom(props){
  let frame = $(document.createDocumentFragment())
  props.forEach(element => {
    let label = $('<label></label>')
    label.html( `${element.prop}(${element.valType})`)
    let input = $('<input />')
    input.attr({
      'type': 'text',
      'data-item': JSON.stringify(element),
      'data-comid': currentTargetData.id,
    })
    setInputValByTargetData(input, element, currentTargetData)
    frame.append(label)
    frame.append(input)
  });
  return frame
}

/**
 *  初始化prop值
 * @param {*} input 
 * @param {*} propItme 
 * @param {*} targetData 
 */
function setInputValByTargetData(input, propItme, targetData ) {
  let value = ''
  if (propItme.propLevel === 'component') {
    value = targetData[propItme.prop]
  } else {
    let properties =  currentTargetData.properties || []
    let prop = properties.find((f)=> f.prop === propItme.prop) 
    value = prop.value || ''
  }
  input.val(value)
}
/**
 *  绑定props保存事件
 */
function bindPropsSaveBtn() {
  if(checkEvents(events, 'propsSave')) return
  $('#propsSave').off('click').on('click', ()=> {
    getOptPorpsVal()
  })
}

/**
 *  将设置值赋值到当前currentTargetData
 */
function getOptPorpsVal() {
  $('#hzOptContent input').each((index, element ) => {
    let valDom = $(element)
    let value = valDom.val()
    let item = valDom.data('item')
    if (item.propLevel === 'component') {
      currentTargetData[item.prop] = value
    } else {
      let properties =  currentTargetData.properties || []
      let propItem = properties.find((f)=> f.prop === item.prop) 
      propItem.value = value
    }
  })
}