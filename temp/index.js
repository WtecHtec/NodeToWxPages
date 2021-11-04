const app = getApp();
import {
  ACCOUNTDATA1,
} from './index.config.js'
const {
  setStatuts,
} = app.require('/utils/util.js')

Page({
  data: {
    accountData1: ACCOUNTDATA1,
    isEmpty: false,
  },
  setStatuts1(dataSrouce, ) {
    let {
      accountData1
    } = this.data
    accountData1 = setStatuts(accountData1, dataSrouce, )
    this.setData({
      accountData1,
    });
  },
  bindEmpty() {}
})