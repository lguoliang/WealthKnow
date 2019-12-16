//app.js
const utils = require('./js/utils');
const api = require('./js/api');
App({
  globalData: {
    openid: '',
    userInfo: null
  },
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env: 'test-rymod',
        // env: 'test-e1a9d',
        traceUser: true,
      })
    }
    wx.u = utils
    wx.a = api
    // 获取openid
    this.onGetOpenid()
  },

  onGetOpenid: function () {
    // 调用云函数
    wx.cloud.callFunction({
      name: 'login',
      success: res => {
        console.log('[云函数] [login] user openid: ', res.result.openid)
        this.globalData.openid = res.result.openid
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
      }
    })
  },

  // 获取用户信息
  checkUserInfo: function (cb) {
    let that = this
    , userInfo = this.globalData.userInfo
    if (userInfo) {
      typeof cb == "function" && cb(userInfo)
    } else {
      wx.getSetting({
        success: function (res) {
          if (res.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称
            wx.getUserInfo({
              success: function (res) {
                that.globalData.userInfo = res.userInfo
                typeof cb == "function" && cb(that.globalData.userInfo)
              }
            })
          } else {
            typeof cb == "function" && cb(userInfo)
          }
        }
      })
    }
  }
})
