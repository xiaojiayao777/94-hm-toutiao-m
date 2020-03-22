/* 我们专门封装一个工具  用来读写和删除我们的token
create by gooly 2020 / 3 / 15
modify by 名字  日期 */

// 专门用来存储用户信息
const USER_TOKEN = 'heima-toutiao-mobile-94'
// 定义三个方法
// 设置用户的token信息
export function setUser (user) {
  // user的参数信息应该是一个对象  对象需要转化成字符串
  window.localStorage.setItem(USER_TOKEN, JSON.stringify(user))
}

// 获取用户的token信息
export function getUser () {
  // 短路表达式
  return JSON.parse(window.localStorage.getItem(USER_TOKEN) || '{}')
}

// 删除用户的token信息
export function delUser () {
  localStorage.removeItem(USER_TOKEN)
}
