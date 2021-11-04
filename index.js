const beautify = require('js-beautify')
const filesUtil = require('./uitls/filesUtil')
const config = require('./config.json')
const codeFormat = { indent_size: 2, space_in_empty_paren: true }
// .json, .js , .wxss, .wxml .index.config.js
function createCompent(config) {
    let comData = `{\n"usingComponents": {\n###components####\n}\n}`
    const caChe = {}
    let result = getCompent(config, caChe)
    result = result.substring(0, result.length - 2)
    comData = comData.replace(/###components####/g, result)
    filesUtil.writeFile(__dirname + '/temp/index.json', beautify.js(comData, codeFormat))
}

function getCompent(config, caChe = {}) {
    let result = ''
    if (config.type && config.type === 'compent' && config.cname) {
        result += `"${config.cname}":"${config.cpath}",\n`
    }
    if (Array.isArray(config) && config.length > 0) {
        result += getCompentJson(result, config, caChe)
    }
    else if (config.childrens && config.childrens.length > 0) {
        let childrens = config.childrens
        result += getCompentJson(result, childrens, caChe)
    }
    return result
}

function getCompentJson(result, childrens, caChe) {
    let len = childrens.length;
    for (let i = 0; i < len; i++) {
        if (!childrens[i].cname) continue
        if (caChe[childrens[i].cname]) continue
        caChe[childrens[i].cname] = true
        result += `"${childrens[i].cname}":"${childrens[i].cpath}",\n`
        if (childrens[i].childrens && childrens[i].childrens.length > 0) {
            result += getCompent(childrens[i].childrens, caChe)
        }
    }
    return result
}

function createWxss() {
    let wxssData = ``
    filesUtil.writeFile(__dirname + '/temp/index.wxss', beautify.css(wxssData, codeFormat))
}

function createWxml(config) {
    let wxmlData = getWxml(config)
    filesUtil.writeFile(__dirname + '/temp/index.wxml', beautify.html(wxmlData, codeFormat))
}

function getWxml(config) {
    let result = ''
    if (Array.isArray(config) && config.length > 0) {
        result += getWxmlString(result, config)
    } else if (config) {
        result += `<${config.cname || 'view'}>\n`
        if (config.childrens && config.childrens.length > 0) {
            let childrens = config.childrens
            result += getWxmlString('', childrens)
        }
        result += `</${config.cname || 'view'}>\n`
    }
    return result
}

function getWxmlString(result, childrens) {
    let len = childrens.length
    for (let i = 0; i < len; i++) {
        result += `<${childrens[i].cname || 'view'} `

        if (childrens[i].slot) {
            result += ` slot="${childrens[i].slot}" `
        }

        let properties = childrens[i].properties
        if (properties && properties.length > 0) {
            properties.forEach(element => {
                if (element.variable) {
                    result += ` ${element.prop}="{{${element.rename || element.prop}}}" `
                } else {
                    result += ` ${element.prop}="${typeof element.value === 'boolean' ? `{{${element.value}}}` : element.value}" `
                }
            });
        }

        let methods = childrens[i].methods
        if (methods && methods.length > 0) {
            methods.forEach(element => {
                result += ` ${element.type + element.name}="${element.event}" `
            });
        }

        result += ">\n"
        if (childrens[i].childrens && childrens[i].childrens.length > 0) {

            result += getWxml(childrens[i].childrens) + `</${childrens[i].cname || 'view'}>\n`
        } else {
            result += `</${childrens[i].cname || 'view'}>\n`
        }
    }
    return result
}

function createJs(config) {
    let jsData = `
        const app = getApp();
        ###import###
        Page({
         data: {###data###},
         ###methods###
        })
    `
    let caCheProps = {}
    let properties = {}
    let importData = {}
    let importStr = ''
    let methodData = { value: '' }
    let indexConfigData = {}
    if (config && config.childrens && config.childrens.length > 0) {
        getJsData(config.childrens, properties, importData, methodData, indexConfigData, caCheProps)
        importStr = getImportData(importData)
    }

    let configData = getIndexConfigData(indexConfigData)
    createIndexConfig(configData)
    jsData = jsData.replace(/###import###/g, importStr)
    jsData = jsData.replace(/###data###/g, getpropData(properties))
    jsData = jsData.replace(/###methods###/g, methodData.value)

    filesUtil.writeFile(__dirname + '/temp/index.js', beautify.js(jsData, codeFormat))
}

function createIndexConfig(data) {
    filesUtil.writeFile(__dirname + '/temp/index.config.js', beautify.js(data, codeFormat))
}

function getJsData(childrens, propData = {}, imData = {}, methodData = {}, indexConfigData = {}, caCheProps = {},) {
    let len = childrens.length
    for (let i = 0; i < len; i++) {
        let properties = childrens[i].properties
        if (properties && properties.length > 0) {
            for (let i = 0; i < properties.length; i++) {
                if (!properties[i].variable) continue
                let prop = properties[i].rename || properties[i].prop
                if (caCheProps[prop]) {
                    throw (`变量重复：${prop}`)
                }
                if (properties[i].isImport) {
                    let CONFIGPROP = prop.toLocaleUpperCase()
                    if (imData['./index.config.js']) {
                        imData['./index.config.js'] += `${CONFIGPROP},`
                    } else {
                        imData['./index.config.js'] = `${CONFIGPROP},`
                    }
                    indexConfigData[CONFIGPROP] = properties[i].value
                    propData[prop] = {
                        CONFIGPROP,
                    }
                } else {
                    propData[prop] = properties[i].value
                }
                caCheProps['v' + prop] = true

                if (properties[i].format && properties[i].format.funcname && properties[i].format.path) {

                    let path = properties[i].format.path
                    let funcname = properties[i].format.funcname
                    let rename = properties[i].format.rename
                    let otherparams = properties[i].format.otherparams
                    if (caCheProps['i' + path] && imData[path].indexOf(funcname) !== -1) {
                        continue
                    }
                    if (imData[path]) {
                        imData[path] += `${funcname},`
                    } else {
                        imData[path] = `${funcname},`
                    }
                    caCheProps['i' + path] = true

                    let methodName = rename || '_' + funcname
                    if (caCheProps['f' + methodName]) throw (`函数名重复：${methodName}`)
                    methodData.value += `${methodName}(${otherparams}){
                            let { ${prop} } = this.data
                            ${prop} =  ${funcname}(${prop}, ${otherparams})
                            this.setData({${prop},});
                        },\n`
                    caCheProps['f' + methodName] = true

                }
            }
        }
        let methods = childrens[i].methods
        if (methods && methods.length > 0) {
            methods.forEach(element => {
                methodData.value += `${element.event}(){}`
                caCheProps['f' + element.event] = true
            });
        }
        if (childrens[i].childrens && childrens[i].childrens.length > 0) {
            getJsData(childrens[i].childrens, propData, imData, methodData, indexConfigData, caCheProps)
        }
    }
}
function getImportData(imData, isImport = false) {
    let keys = Object.keys(imData)
    let len = keys.length;
    let result = ''
    for (let i = 0; i < len; i++) {
        let key = keys[i]
        if (isImport || key === './index.config.js') {
            result += `import { ${imData[key]} } from '${key}'\n`
        } else {
            result += `const { ${imData[key]} } = app.require('${key}')\n`
        }

    }
    return result
}
function getIndexConfigData(configData) {
    let keys = Object.keys(configData)
    let len = keys.length;
    let result = ''
    for (let i = 0; i < len; i++) {
        let key = keys[i]
        result += `export const ${key} = ${JSON.stringify(configData[key])}\n`
    }
    return result
}

function getpropData(configData) {
    let keys = Object.keys(configData)
    let len = keys.length;
    let result = ''
    for (let i = 0; i < len; i++) {
        let key = keys[i]
        result += ` ${key} : ${typeof configData[key] === 'object' && configData[key].CONFIGPROP ? configData[key].CONFIGPROP : JSON.stringify(configData[key])},`
    }
    return result
}
createCompent(config)
createWxss(config)
createWxml(config)
createJs(config)