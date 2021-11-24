// const { temJson } = require('./temp.config')
// const { AccountWxPage, BgPage } = require('./config')
// const { setPageData, initCreatePage } = require('./uitls/pageUtil')
// setPageData(BgPage, temJson)
// initCreatePage(__dirname + '/lol_service', BgPage)
const { initCreatePage } = require('./uitls/pageUtil')
const { createZip, checkFilePath } = require('./uitls/filesUtil')
const zipsPath = __dirname + '/resource/zips/'
const pagesPath = __dirname + '/resource/pages/'

// createZip(zipsPath + 'test.zip', pagesPath + '1637681691281')

const express = require('express')
const bodyParser = require('body-parser');
const port = 3000
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//设置跨域访问
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
app.get('/', (req, res) => {
  res.status(200).json({
    status: 200,
    data: 'hello ',
  })
})
/**
 *  req.body : data == 页面配置数据 
 *           : name === 页面名字
 */
app.post('/export', async (req, res) => {
  let pageData = req.body.data || null
  let name = req.body.name || null
  if (pageData && name) {
    let filePath = pagesPath + name
    let fileName = name + '.zip'
    let fileZipPath = zipsPath + fileName
    await initCreatePage(filePath, pageData)
    createZip(fileZipPath, filePath).then(() => {
      res.status(200).json({ status: 200, msg: '压缩成功' })
    }).catch(() => {
      res.json({
        status: 202,
        msg: '压缩失败'
      })
    })

  } else {
    res.json({
      status: 201,
      msg: '数据格式错误'
    })
  }
})
app.get('/export/:name', async function (req, res) {
  let params = req.params
  let fileName = params.name + '.zip'
  let fileZipPath = zipsPath + fileName
  if (await checkFilePath(fileZipPath)) {
    res.download(fileZipPath, fileName);
  } else {
    res.status(201).end('资源不存在')
  }
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


