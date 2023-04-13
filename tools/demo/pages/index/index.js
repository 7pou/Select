/**
 * 此组件对比原生Picker解决了一下问题
 *
 * picker选中后返回的是range的下标, 如果在reactice-data中存选中项的index
 * view中显示选中值 需要配置为 range[index].fieldName
 * js中 提交数据时 也需要单独再次获取 range[index].key
 *
 * 使用Select组件支持model:value双向绑定的写法,也可以监听bindchange函数手动处理
 * 使用Select可以像使用web端select组件一样,  在reactice-data存入选中项的值
 * view中显示选中值 就交给组件来处理
 * js中 提交数据时 可以直接取 reactice-data存入选中项的值
 */

const mapUserSex = [
  {key: 1, value: '男'},
  {key: 2, value: '女'},
  {key: 3, value: '未知'},
]
Page({
  data: {
    mapUserSex,
    selectValue: '',
    selectValue2: '',
    pickerIndex: '',
  },

  // picker
  handlePickerChange(e) {
    this.setData({pickerIndex: e.detail.value})
  },

  // select
  handleSelectChange(e) {
    console.log(e.detail)
    this.setData({selectValue: e.detail.value})
  },

})
