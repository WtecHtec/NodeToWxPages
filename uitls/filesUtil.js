const fs = require('fs')
const admZip = require('adm-zip');

const writeFile = function (filePath, content) {
  return new Promise(function (resovle, reject) {

    fs.writeFile(filePath, content, function (err) {
      if (err) {
        //  console.log('写入文件失败')
        return reject(err)
      }
      resovle()
    });
  })
}

const readFile = function (filePath) {
  return new Promise(function (resovle, reject) {

    fs.readFile(filePath, function (err, data) {
      if (err) {
        //  console.log('读取文件失败')
        return reject(err)
      }
      //  console.log('读取文件', data.toString())
      resovle(data.toString())
    });
  })
}


const createDir = function (filePath) {
  return new Promise(function (resovle, reject) {
    fs.exists(filePath, (exists) => {
      if (exists) {
        // console.log('存在')
        resovle()
      } else {
        fs.mkdir(filePath, function (err) {

          if (err) {
            console.error(err);
            return reject(err)
          }
          resovle()
        });
      }
    });
  })
}
const createZip = function (zipPath, filePath) {
  return new Promise(function (resovle, reject) {
    try {
      let zip = new admZip();
      zip.addLocalFolder(filePath);
      zip.writeZip(zipPath);
      resovle()
    } catch (e) {
      reject()
    }
  })
}

const checkFilePath = function (filePath) {
  return new Promise(function (resovle, reject) {
    fs.exists(filePath, (exists) => {
      if (exists) {
        resovle(true)
      } else {
        resovle(false)
      }
    });
  })
}
module.exports = {
  createDir,
  writeFile,
  readFile,
  createZip,
  checkFilePath,
}
