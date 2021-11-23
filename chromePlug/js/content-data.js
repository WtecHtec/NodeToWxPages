let targetDataObj = {}
let targetBlockProps = []
let currentTargetData = {}
let events = {}
const defaultPageInfo = {
  "type": "compent",
  "cname": "",
  "cpath": "",
  "childrens": []
}
const defaultProp = [
  {
    prop: 'rename',
    propLevel: 'component',
    valType: 'string',
  },
  {
    prop: 'slot',
    propLevel: 'component',
    valType: 'string',
  },
]