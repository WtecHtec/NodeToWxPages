// const { temJson } = require('./temp.config')
// const { AccountWxPage, BgPage } = require('./config')
// const { setPageData, initCreatePage } = require('./uitls/pageUtil')
// setPageData(BgPage, temJson)
// initCreatePage(__dirname + '/lol_service', BgPage)
const { createZip } = require('./uitls/filesUtil')
const zipsPath = __dirname+ '/resource/zips/'
const pagesPath = __dirname+ '/resource/pages/'

createZip(zipsPath + 'test.zip', pagesPath + 'lol_service')

const express = require('express')
var bodyParser = require('body-parser');
const port = 3000
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//设置跨域访问
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
app.get('/', (req, res) => {
    res.send('Hello World!')
})
/**
 *  req.body : data == 页面配置数据 
 *           : name === 页面名字
 */
app.post('/export', (req, res) => {
    let pageData = req.body.data || null
    let name = req.body.name || null
    if (pageData && name) {

    } else {
        res.json({
            status: 201
        })
    }

})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


