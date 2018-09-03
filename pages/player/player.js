// player.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Album: "夜聽佛陀故事",
    Name: "一切施王",
    Episode: "1",
    Instructor: "靜瑜老師",
    Time: "",
    Serialnumber: "D18-005-001",
    Type: "audio",
    Position: "",
    Filepath: "http://www.pan.cjnflf.com/%E9%9F%B3%E9%A2%91/%E9%9D%99%E7%91%9C%E8%80%81%E5%B8%88/%E5%A4%9C%E8%81%BD%E4%BD%9B%E9%99%80%E6%95%85%E4%BA%8B/%E4%B8%80%E5%88%87%E6%96%BD%E7%8E%8B.mp3",
    Imgpath: "http://www.pan.cjnflf.com/%E9%9F%B3%E9%A2%91/%E9%9D%99%E7%91%9C%E8%80%81%E5%B8%88/%E5%A4%9C%E8%81%BD%E4%BD%9B%E9%99%80%E6%95%85%E4%BA%8B/%E6%89%8B%E4%B8%AD%E7%94%9F%E9%87%91.jpg",
    Duration: "12:33",
    Link: "",
    Description: "夜聽佛陀故事",
    InfoID: "03d0b02e-8325-11e8-9178-00163e045e63",
    Status: ""
  },

  audioPlay: function () {
    this.audioCtx.play()
  },
  audioPause: function () {
    this.audioCtx.pause()
  },
  audio14: function () {
    this.audioCtx.seek(14)
  },
  audioStart: function () {
    this.audioCtx.seek(0)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.audioCtx = wx.createAudioContext('myAudio')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})