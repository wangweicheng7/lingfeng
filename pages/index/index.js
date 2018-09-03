Page({
  data:{
    list: [
      {
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
      {
        Album: "夜聽佛陀故事",
        Name: "手中生金",
        Episode: "2",
        Instructor: "靜瑜老師",
        Time: "",
        Serialnumber: "D18-005-002",
        Type: "audio",
        Position: "",
        Filepath: "http://www.pan.cjnflf.com/%E9%9F%B3%E9%A2%91/%E9%9D%99%E7%91%9C%E8%80%81%E5%B8%88/%E5%A4%9C%E8%81%BD%E4%BD%9B%E9%99%80%E6%95%85%E4%BA%8B/%E6%89%8B%E4%B8%AD%E7%94%9F%E9%87%91.mp3",
        Imgpath: "http://www.pan.cjnflf.com/%E9%9F%B3%E9%A2%91/%E9%9D%99%E7%91%9C%E8%80%81%E5%B8%88/%E5%A4%9C%E8%81%BD%E4%BD%9B%E9%99%80%E6%95%85%E4%BA%8B/%E6%89%8B%E4%B8%AD%E7%94%9F%E9%87%91.jpg",
        Duration: "03:38",
        Link: "",
        Description: "夜聽佛陀故事",
        InfoID: "86616370-8325-11e8-9178-00163e045e63",
        Status: ""
      }
    ]
    },
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
  }
})

