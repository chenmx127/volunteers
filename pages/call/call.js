// pages/call/call.js
let call = require('../../utils/api.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    call:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    call.TEER('/volunteer/website/canjiaList','GET',{
      openId:"oiUyR4iykJCuGJOFg6t2IgGN0_xA",type:1,type:1
    },res=>{
      // console.log(res)
      this.setData({
        call:res.data.data.list
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