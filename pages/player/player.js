// player.js
var util = require('../../utils/util.js')
var app = getApp()

Page({
  data: {
    Album: '',
    Name: '',
    Episode: '',
    Instructor: '',
    Time: '',
    Serialnumber: '',
    Type: '',
    Position: '',
    Filepath: '',
    Imgpath: '',
    Duration: '',
    Link: '',
    Description: '',
    InfoID: '',
    Status: '',
    State: {
      Progress: 0.5,
      CurrentPosition: '1200',
      Duration: '2600'
    },
    Playing: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('player onLoad');
    let that = this;
    let data = app.globalData.audioData;
    console.log(data);
    this.setData(data);

    wx.playBackgroundAudio({
      dataUrl: that.data.Filepath,
      title: that.data.Album + ' - ' + that.data.Name,
      coverImgUrl: that.data.Imgpath,
      success: function (res) {
        console.log('加载完成，开始播放');
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('player onReady');
    let that = this;
    that.audioPlay();

    wx.onBackgroundAudioPlay(function(){
      console.log('开始播放');
      that.audioPlay();
    });

    // this.audioCtx = wx.createAudioContext('myAudio')
  },

  audioPlay: function() {
    let that = this;
    let inv = setInterval(function(){
      wx.getBackgroundAudioPlayerState({
        success: function(res) {
          console.log('audioPlay');
          console.log(res)
          if(res.status == 1 ){
            console.log('player start');
            that.setData({
              Playing: true,
              State: {
                Progress: res.currentPosition/res.duration * 100,
                CurrentPosition: that.timeToString(res.currentPosition),
                Duration: that.timeToString(res.duration)
              }
            });
          }else{
            that.setData({
              Playing: false,
            });
            clearInterval(inv)
          }
        }
      })
    }, 100);
  },

  timeToString: function(duration) {
    let str = ''
    let hour = parseInt(duration/3600);
    duration = duration%3600;
    let minute = parseInt(duration/60) < 10 ? ('0' + parseInt(duration/60)): (parseInt(duration/60));
    let second = duration%60 < 10 ? ('0' + duration%60) : (duration%60);
    str = hour + ':' + minute + ':' + second;
    return str;
  },

  audioToggle: function() {
    let that = this;
    if(that.data.Playing) {
      wx.pauseBackgroundAudio();
    }else{
      wx.playBackgroundAudio({
        title: that.data.Album,
        coverImgUrl: that.data.Imgpath,
        dataUrl: that.data.Filepath
      })
    }
    that.audioPlay()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})