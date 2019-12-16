// miniprogram/pages/queryResult/queryResult.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    objectArray: [
      {
        id: 0,
        name: '美国1'
      },
      {
        id: 1,
        name: '中国'
      },
      {
        id: 2,
        name: '巴西'
      },
      {
        id: 3,
        name: '日本'
      }
    ],
    typeList: [],
    resultList: [],
    afterSearch: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getType()
  },


  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },

  getType: function () {
    wx.showLoading({ title: '加载中...' })
    const db = wx.cloud.database()
    db.collection('wk_type').get().then(res => {
      console.log('wk_type', res)
      wx.hideLoading()
      this.setData({
        typeList: res.data
      })
    })
  },

  formSubmit: function (e) {
    console.log('01065934', e)
    wx.showLoading({ title: '加载中...' })
    const db = wx.cloud.database()
    db.collection('wk-zq').where({
      code: e.detail.value.code
    }).get().then(res => {
      console.log('product', res)
      wx.hideLoading()
      this.setData({
        resultList: res.data,
        afterSearch: true
      })
    })
  }
})