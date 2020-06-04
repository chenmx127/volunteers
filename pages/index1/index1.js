// pages/index1/index1.js
let shouye = require('../../utils/api.js'); 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    background: ["../../img/banner1.jpg","../../img/banner2.jpg","../../img/banner3.jpg"],
    imglist:[
      {path:"../../img/cyhd.png",value:"参与活动"},
      {path:"../../img/hdzm.png",value:"活动招募"},
      {path:"../../img/zcfg.png",value:"政策法规"}],
    contentlist:[
      {tit_img:"../../img/jr.png",title:"参与活动"},
      {tit_img:"../../img/hd.png",title:"活动招募"},
      {tit_img:"../../img/zc.png",title:"政策法规"}],
    actlist:[
      {img:"../../img/tu1.png",title:"为灾区人民模子捐款",address:"某某广场",hour:"2019年3月28日",person:"志愿者协会"},
      {img:"../../img/tupian.png",title:"为孤寡老人送爱心午餐",address:"某某广场",hour:"2019年3月28日",person:"志愿者协会"},
      {img:"../../img/tu1.png",title:"为灾区人民模子捐款",address:"某某广场",hour:"2019年3月28日",person:"志愿者协会"}]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    shouye.TEER('/volunteer/website/huodongList','GET',{},res=>{console.log(res)})
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