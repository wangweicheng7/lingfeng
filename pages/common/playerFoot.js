var app = getApp()

const player = {
  audioData: function() {
    this.setData({
      audioData: app.globalData.audioData
    });
  }
}

export default player;