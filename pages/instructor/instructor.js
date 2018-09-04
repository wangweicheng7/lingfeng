// instructor.js
var app = getApp()
Page({
  data: {
    bigImg:'',
    album:'',
    instructor:'',
    list: [],
    hidden: true
  },
  loading: false,
  
  onLoad: function (option) {
    this.setData({
      album: option.Album
    });
    this.loadData(option.Album)
  },

  onReady: function (option) { // 设置title
    var that = this;
    wx.setNavigationBarTitle({
      title: that.data.album
    })
  },


  loadData: function (name) {
    var that = this;
    this.setData({
      hidden: false
    });
    var url = 'https://www.cjnflf.com/album?name=' + encodeURIComponent(name) + '&type=audio';
    wx.request({
      url: url,
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
        that.setData({
          newsData: res.data,
          bigImg: res.data[0].Imgpath,
          album: res.data[0].Album,
          instructor: res.data[0].Instructor,
          hidden: true
        });
      }
    })
  },
  //点击事件
  bindItemTap: function (event) {
    var data = event.currentTarget.dataset.data; // 当前id
    console.log(data);
    // 设置到全局变量中去，让下个页面可以访问
    app.globalData.audioData = data;
    wx.navigateTo({
      url: '../player/player'
    });
  }
})