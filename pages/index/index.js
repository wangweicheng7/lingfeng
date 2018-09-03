Page({
  data:{
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
  onLoad: function () {
    this.loadData()
  },
  loadData: function (event) {
    var that = this;
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
          newsData: res.data,
          hidden: true
        });
      }
    })
  }
})

