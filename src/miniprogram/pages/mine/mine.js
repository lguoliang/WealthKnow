// pages/mine/mine.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl: '../../images/avatar.png',
    userInfo: {},
    isAdmin: wx.getStorageSync('isAdmin')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    app.checkUserInfo(res => {
      this.setData({
        userInfo: res
      })
    })
    await this.checkAdmin()
  },

  /**
   * 获取用户信息
   * @param {} e 
   */
  getUserInfo: function (e) {
    if (e.detail.userInfo) {
      this.setData({
        userInfo: e.detail.userInfo
      })
    }
  },

  /**
   * 验证是否是管理员
   */
  checkAdmin: async function () {
    let that = this;
    const value = wx.getStorageSync('isAdmin')
    if (value === '') {
      wx.showLoading({ title: '加载中...' })
      let res = await wx.a.checkAdmin();
      wx.setStorageSync('isAdmin', res.result)
      that.setData({
        isAdmin: res.result
      })
      wx.hideLoading()
    }
  },


  /**
   * 跳转
   */
  toRoute: function (e) {
    let route = {
      // 我的收藏
      'collection': '../mine/collection/collection?type=1',
      // 我的点赞
      'zan': '../mine/collection/collection?type=2',
      // 我的消息
      'notice': '../mine/notice/notice',
      // 历史版本
      'release': '../mine/release/release',
      // 后台管理
      'admin': '../admin/index'
    }
    wx.navigateTo({
      url: route[e.currentTarget.dataset.name]
    })
  },

  /**
   * 展示打赏二维码
   * @param {} e 
   */
  showQrcode: async function (e) {
    wx.u.toast('TODO')
  },

  /**
   * 展示微信二维码
   * @param {*} e 
   */
  showWechatCode: async function (e) {
    wx.u.toast('TODO')
  }
})