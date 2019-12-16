// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV })

// 云函数入口函数
exports.main = async (event, context) => {
  switch (event.action) {
    case 'checkAdmin': {
      return checkAdmin(event)
    }
  }
}
/**
 * 验证
 */
async function checkAdmin() {
  const wxContext = cloud.getWXContext()
  return process.env.admin ? process.env.admin.indexOf(wxContext.OPENID) != -1 : true
}