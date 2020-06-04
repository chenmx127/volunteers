// pages/details/details.js
let details = require('../../utils/api.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detlist:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (options) {
    details.TEER('/volunteer/website/huodong','GET',{ id: "6f9b97b1118a43e7991260cc834491b6"},res=>{
      console.log(res);
      this.setData({
        detlist:res.data.data
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})