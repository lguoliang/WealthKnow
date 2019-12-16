// toast
const toast = function (title) {
  wx.showToast({
    icon: 'none',
    title: title || 'toast'
  })
}

module.exports = {
  toast
}