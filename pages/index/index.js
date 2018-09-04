// index.js
// import player from '../common/playerFoot.js'

var app = getApp()

Page({
  data:{
    list: [],
    hidden: true,
    audioData: null
  },
  loading: false,

  onLoad: function () {
    this.loadData()
  },

  loadData: function (event) {
    var that = this;
    this.setData({
      hidden: false
    })
    wx.request({
      url: 'https://www.cjnflf.com/album',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
        that.setData({
          list: res.data,
          hidden: true
        });
      }
    })
  },
  
  //点击事件
  bindItemTap: function (event) {
    var name = event.currentTarget.dataset.data.Album; // 当前id
    wx.navigateTo({
      url: '../instructor/instructor?Album='+name
    });
  }
})

