// pages/actives/actives.js
let actJs=require('../../utils/api.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    actlist:[
      {img:"../../img/tu1.png",title:"为灾区人民模子捐款",address:"某某广场",hour:"2019年3月28日",person:"志愿者协会"},
      {img:"../../img/tupian.png",title:"为孤寡老人送爱心午餐",address:"某某广场",hour:"2019年3月28日",person:"志愿者协会"},
      {img:"../../img/tu1.png",title:"为灾区人民模子捐款",address:"某某广场",hour:"2019年3月28日",person:"志愿者协会"}
    ],
    afterlist:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    actJs.TEER('/volunteer/website/huodongList','GET',{},res=>{
      console.log(res);
      this.setData({
        afterlist:res.data.data.list,
        
      })
    })
  },
  jump(e){
    console.log(e);
    this.setData({
      name:e.currentTarget.dataset.id
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