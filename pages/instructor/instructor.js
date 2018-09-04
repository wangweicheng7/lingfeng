// instructor.js
var app = getApp()
Page({
  data: {
    list: [],
    hidden: true
  },
  loading: false,
  kindToggle: function (e) {
    var id = e.currentTarget.id, list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list: list
    });
  },
  onLoad: function (option) {
    this.loadData(option.Album)
  },

  loadData: function (name) {
    var that = this;
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
          hidden: true
        });
      }
    })
  },
  //点击事件
  bindItemTap: function (event) {
    var name = event.currentTarget.dataset.data.Album; // 当前id
    console.log(name);
    // 设置到全局变量中去，让下个页面可以访问
    app.globalData.Album = name;
    wx.navigateTo({
      url: '../instructor/instructor'
    });
  }
})