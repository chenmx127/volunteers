//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    item: {
      index: 0,
      msg: 'this is a template',
      time: '2016-09-15'
    }
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
