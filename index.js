const { temJson } = require('./temp.config')
const { AccountWxPage, BgPage } = require('./config')
const { setPageData, initCreatePage } = require('./uitls/pageUtil')
setPageData(BgPage, temJson)
initCreatePage(__dirname + '/lol_service', BgPage)


