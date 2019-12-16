/**
* 验证是否是管理员
*/
function checkAdmin() {
  return wx.cloud.callFunction({
    name: 'adminService',
    data: {
      action: "checkAdmin"
    }
  })
}
module.exports = {
  checkAdmin
}