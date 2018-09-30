// pages/home/query.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    startDate: "",
    endDate: "",
    date: "",
    endTime: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const date = new Date();
    let startDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    let endDate = date.getFullYear() + "-" + (date.getMonth() + 2) + "-" + date.getDate();
    this.date = startDate;
    this.endTime = startDate;
    this.setData({
      startDate: startDate,
      endDate: endDate,
      date: startDate,
      endTime: startDate
    })
  },
  bindDateChange: function (e) {
    //console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  endTimeChange: function (e) {
    //console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      endTime: e.detail.value
    })
  },
  query(e){
    let data = e.detail.value;
    let values = Object.values(data);
    //console.log(values);
    let empty = false;
    Object.values(data).forEach(item=>{
      if(!item){
        empty = true;
      }
    });
    if (empty){
      wx.showToast({
        title: "请填充数据",
        icon: "none"
      });
    }else{
      wx.navigateTo({
        url: '/pages/home/list?' + this.objDeUCode(data),
      })
    }
    //this.objDeUCode(data);
    //console.log(e);
  },
  objDeUCode(obj){
    let keys = Object.keys(obj).map(item=>item+"="+obj[item]).join("&");
    //console.log(keys);
    return keys;
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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