// components/login/login.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    logged: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    navigateBack: function (e) {
      wx.switchTab({
        url: '/pages/index/index'
      })
    },
    onGetUserInfo: function (e) {
      if (e.detail.userInfo) {
        app.globalData.userInfo = e.detail.userInfo
        this.triggerEvent('cb', { userInfo: e.detail.userInfo })
      } else {
        this.navigateBack()
      }
    }
  },
  options: {
    addGlobalClass: true
  }
})
