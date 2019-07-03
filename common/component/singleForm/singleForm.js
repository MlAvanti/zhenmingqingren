// common/component/singleForm/singleForm.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {
    userName: '',
    radioData: [
      {
        text: '男',
        value: 0,
        checked: true
      },
      {
        text: '女',
        value: 1,
        checked: false
      }
    ],
    datePick: '选择您的出生日期',
    gender: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleInput: function(e) {
      this.setData({
        userName: e.detail.value
      });
    },
    handleRadioChange: function(e) {
      this.setData({
        gender: e.detail.value
      });
    },
    handlePickerDateChange: function(e) {
      this.setData({
        datePick: e.detail.value
      });
    },
    handlePickerDateCancel: function(e) {
      this.setData({
        datePick: '选择您的出生日期'
      });
    },
    handleBtnFind: function() {
      let name = this.data.userName;
      let date = this.data.datePick;

      let gender = this.data.gender === 0 ? '男' : '女';
      console.log(name + '--' + gender + '--' + date);
      wx.showModal({
        title: '提示',
        content: name + '--' + gender + '--' + date,
        success (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
         
    }
  },

  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    }
  }
});
