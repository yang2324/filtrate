// 引入数据
const tabTxtArr = require('../../utils/filtrate.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    tabTxt: [],
    searchParam: [],
  },

  //切换导航按钮
  filterTab(e) {
    var that = this;
    var data = JSON.parse(JSON.stringify(that.data.tabTxt));
    var index = e.currentTarget.dataset.index;
    var newTabTxt = data.map(function (e) {
      e.active = false;
      return e;
    });
    newTabTxt[index].active = !that.data.tabTxt[index].active;
    this.setData({
      tabTxt: data
    })
  },

  // 点击导航按钮的条件
  clickTabChild(e) {
    // console.log(e.currentTarget.dataset)
    let tabTxt = this.data.tabTxt;
    let index1 = e.currentTarget.dataset.index1;
    let index2 = e.currentTarget.dataset.index2;
    let index3 = e.currentTarget.dataset.index3;
    // console.log(index2)
    // console.log(tabTxt[index1].child[index2].childType[index3].selected);
    //1.在改变某个子按钮之前先把该子按钮组的所有选中状态selected改成false，
    tabTxt[index1].child[index2].childType.forEach(e =>{
      e.selected = false
    })
    //2.之后再把当前点击的按钮的状态改为true
    tabTxt[index1].child[index2].childType[index3].selected = !tabTxt[index1].child[index2].childType[index3].selected;
    this.setData({
      tabTxt: tabTxt
    })
    //  console.log(tabTxt)
  },

  // 清空条件
  filterClears(e) {
    var that = this;
    let tabTxt = that.data.tabTxt;
    tabTxt.forEach(e1 => {
       console.log(e1)
      e1.child.forEach(e2 => {
        // console.log(e2)
        e2.childType.forEach(e3 => {
           console.log(e3)
           if(e1.active){
              e3.selected = false
           }
        })
      })
    })
    this.setData({
      tabTxt: tabTxt
    })
  },
  // 确定按钮
  filterSubmit(e) {
    var that = this;
    // console.log(that.data.searchParam);
    let tabTxt = this.data.tabTxt;
    let selectedTextArr = [];
    tabTxt.forEach(e1 => {
      // console.log(e1)
      e1.active = false;  //关闭抽屉
      e1.child.forEach(e2 => {
        // console.log(e2)
        e2.childType.forEach(e3 => {
          // console.log(e3)
          if(e3.selected){
            //选中的加载在一个数组中
            selectedTextArr.push(e3.text)
          }
        })
      })
    })
    this.setData({
      tabTxt:tabTxt
    })
    console.log(selectedTextArr)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    that.setData({
      tabTxt: tabTxtArr.tabTxt,
    })
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
})