// pages/post/post.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data:{
      object:{
        date:"Jan 29 2020"
      }
    },
    title:"现实化的冰棍与雪糕",
    postImg:"https://s1.ax1x.com/2020/04/29/J7PXGT.jpg",
    avatar:"https://s1.ax1x.com/2020/04/29/J7PHZn.jpg",
    content:"冰棍与雪糕绝对不是同一个东西，3到5毛钱的雪糕犹如现在的哈根达斯，而5分1毛的冰棍儿就像现在的老冰棍，时过境迁，...",
    redingNum:99,
    collectionNun:{
      array:[108]
    },
    commentNum:7,
    imageArr:["https://s1.ax1x.com/2020/04/29/J7PXGT.jpg","https://s1.ax1x.com/2020/04/29/J7PHZn.jpg","https://s1.ax1x.com/2020/04/29/J7POiV.jpg","https://s1.ax1x.com/2020/04/29/J7Pbaq.jpg","https://s1.ax1x.com/2020/04/29/J7PqI0.jpg","https://s1.ax1x.com/2020/04/29/J7PjRU.jpg","https://s1.ax1x.com/2020/04/29/J7PvzF.jpg","https://s1.ax1x.com/2020/04/29/J7PzM4.jpg","https://s1.ax1x.com/2020/04/29/J7iSsJ.png","https://s1.ax1x.com/2020/04/29/J7ipL9.png","https://s1.ax1x.com/2020/04/29/J7iCZR.jpg","https://s1.ax1x.com/2020/04/29/J7iAJK.jpg","https://s1.ax1x.com/2020/04/29/J7iPd1.jpg","https://s1.ax1x.com/2020/04/29/J7iiIx.jpg","https://s1.ax1x.com/2020/04/29/J7iki6.jpg","https://s1.ax1x.com/2020/04/29/J7iVzD.jpg","https://s1.ax1x.com/2020/04/29/J7iERO.jpg","https://s1.ax1x.com/2020/04/29/J7imsH.jpg","https://s1.ax1x.com/2020/04/29/J7ieQe.jpg","https://s1.ax1x.com/2020/04/29/J7inLd.jpg","https://s1.ax1x.com/2020/04/29/J7iKeA.jpg","https://s1.ax1x.com/2020/04/29/J7iMdI.jpg","https://s1.ax1x.com/2020/04/29/J7iQot.jpg","https://s1.ax1x.com/2020/04/29/J7i1FP.jpg","https://s1.ax1x.com/2020/04/29/J7i3Jf.jpg","https://s1.ax1x.com/2020/04/29/J7i8W8.png"]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("onLoad:页面被加载");
    this.setData({
      "title":"一根雪糕的经济学原理"
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady:监听页面初次渲染完成")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onShow:监听页面显示")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("onHide:监听页面隐藏")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("onUnload:监听页面卸载")
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("onPullDownRefresh:监听用户下拉动作")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("onPullDownRefresh:页面上拉触底事件的处理函数")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log("onPullDownRefresh:用户点击右上角分享")
  }
})