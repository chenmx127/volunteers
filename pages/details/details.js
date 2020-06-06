// pages/details/details.js
let details = require('../../utils/api.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detlist:{},
    latitude:"",
    longitude:"",
    markers: [{
      iconPath: "../../img/map.png",
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 50,
      height: 50
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (options) {
    let oid = options.id;
    details.TEER('/volunteer/website/huodong','GET',{ id: oid},res=>{
      // console.log(res);
      this.setData({
        detlist:res.data.data
      })
    }),
    wx.getLocation({
      success:res=>{
        // console.log(res);
        this.setData({
          latitude:res.latitude,
          longitude:res.longitude,
          "markers[0].latitude":res.latitude,
          "markers[0].longitude":res.longitude,
        })
      }
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