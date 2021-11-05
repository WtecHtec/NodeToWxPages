const { temJson } = require('./temp.config')
const pageConfigData = require('./config.json')
const { setPageData, initCreatePage } = require('./uitls/pageUtil')
setPageData(pageConfigData, temJson)
initCreatePage(__dirname + '/account-wx', pageConfigData)


