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

function getPropDom(props) {
  let frame = $(document.createDocumentFragment())
  console.log('props==', props)
  props.forEach(element => {

    if (element.propLevel === 'data') {
      // "variable": true,
      // "isImport": true,
      //  rename: zzz
      setPropLeveByData(frame, element)
    } else if (element.propLevel === 'component') {
      setPropInputText(frame, element, `${element.prop}(${element.valType || 'any'})`)
    } else  {
      if(element.values && Array.isArray(element.values) && element.values.length > 0 ) {
        setPropByData(frame, element, `${element.prop}(${element.valType || 'any'})`, 'value', 'select', element.values)
      } else {
        setPropInputText(frame, element, `${element.prop}(${element.valType || 'any'})`, 'value')
      }
    } 
  });
  return frame
}
/**
 *  设置prop等级为Data
 * @param {*} frame 
 * @param {*} element 
 */
function setPropLeveByData(frame, element) {
  let propDiv = $('<div class="hz-opt-prop"></div>')
  let label = getLabel(element.prop)
  propDiv.append(label)
  propDiv.append("<br/>")
  console.log(element.values)
  if(element.values && Array.isArray(element.values) && element.values.length > 0 ) {
    setPropByData(propDiv, element, `value(${element.valType || 'any'})`, 'value', 'select', element.values)
  } else {
    setPropByData(propDiv, element, `value(${element.valType || 'any'})`, 'value', 'text')
  }
  setPropByData(propDiv, element, `rename(any)`, 'rename', 'text')
  setPropByData(propDiv, element, `variable(bool)`, 'variable', 'select', [false, true])
  setPropByData(propDiv, element, `isImport(bool)`, 'isImport', 'select', [false, true])
  frame.append(propDiv)
}
/**
 *  设置prop等级为data
 * @param {*} frame 
 * @param {*} element 
 * @param {*} labelText 
 * @param {*} key 
 */
function setPropByData(frame, element, labelText, key, type, values) {
  if (!element[key]) element[key] = ''
  let label = getLabel(labelText)
  let input = null
  if (type === 'select') {
    input = getSelectInput(element, currentTargetData.id, key, values)
  } else {
    input = getTextInput(element, currentTargetData.id, key)
  }
  setInputValByTargetData(input, element, currentTargetData, key)
  frame.append(label)
  frame.append(input)
}
/**
 *  设置prop等级为component
 * @param {*} frame 
 * @param {*} element 
 */
function setPropInputText(frame, element, labelText, key) {
  let label = getLabel(labelText)
  let input = getTextInput(element, currentTargetData.id, key)
  setInputValByTargetData(input, element, currentTargetData, key)
  frame.append(label)
  frame.append(input)
}
function getLabel(labelText) {
  let label = $('<label></label>')
  label.html(labelText)
  return label
}
/**
 *  text 输入dom
 * @param {} element 
 * @param {*} id 
 * @returns 
 */
function getTextInput(element, id, key) {
  let input = $('<input />')
  input.attr({
    'data-input': '1',
    'type': 'text',
    'data-key': key,
    'data-item': JSON.stringify(element),
    'data-comid': id,
  })
  return input
}

/**
 *  选择dom
 * @param { } element 
 * @param {*} id 
 * @param {*} values 
 * @returns 
 */
function getSelectInput(element, id, key, values) {
  let select = $('<select></select>')
  select.attr({
    'data-input': '1',
    'data-key': key,
    'data-item': JSON.stringify(element),
    'data-comid': id,
  })
  let frame = $(document.createDocumentFragment())
  values.forEach((item) => {
    let option = $(`<option value="${item}">${item}</option>`)
    frame.append(option)
  })
  select.append(frame)
  return select
}
/**
 *  初始化prop值
 * @param {*} input 
 * @param {*} propItme 
 * @param {*} targetData 
 */
function setInputValByTargetData(input, propItme, targetData, key) {
  let value = ''
  if (propItme.propLevel === 'component') {
    value = targetData[propItme.prop]
  } else {
    let properties = currentTargetData.properties || []
    let prop = properties.find((f) => f.prop === propItme.prop)
    value = key ? (prop[key] || '') : (prop.value || '')
    console.log('value', value,  key)
  }
  input.val(value)
}
/**
 *  绑定props保存事件
 */
function bindPropsSaveBtn() {
  if (checkEvents(events, 'propsSave')) return
  $('#propsSave').off('click').on('click', () => {
    getOptPorpsVal()
  })
}

/**
 *  将设置值赋值到当前currentTargetData
 */
function getOptPorpsVal() {
  $('#hzOptContent [data-input="1"]').each((index, element) => {
    let valDom = $(element)
    let value = valDom.val()
    let item = valDom.data('item')
    let key = valDom.data('key')
    if (item.propLevel === 'component') {
      currentTargetData[item.prop] = value
    } else {
      let properties = currentTargetData.properties || []
      let propItem = properties.find((f) => f.prop === item.prop)
      propItem[key] = value
    }
  })
  console.log('currentTargetData===', currentTargetData)
}