/* eslint-disable no-undef */

export default class Feishu {
  static getUserInfo() {
    tt.login({
      success: function () {
        tt.getUserInfo({
          withCredentials: false,
          success: function (res) {
            tt.showToast({
              title: ` hello ${res.userInfo.nickName}`,
            })
          },
          fail() {
            tt.showToast({
              title: ` getUserInfo fail`,
            })
          },
        })
      },
      fail: function () {
        tt.showToast({
          title: `login fail`,
        })
      },
    })
  }
}
