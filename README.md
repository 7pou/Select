
# WeSelect

[![](https://img.shields.io/npm/v/@7pound/we-select.svg?style=flat-square)](https://www.npmjs.com/package/@7pound/we-select)
[![](https://img.shields.io/npm/dw/@7pound/we-select?style=flat-square)](https://www.npmjs.com/package/@7pound/we-select)
[![](https://img.shields.io/travis/7pou/@7pound/we-select.svg?style=flat-square)](https://github.com/7pou/@7pound/we-select)
[![](https://img.shields.io/github/license/7pou/@7pound/we-select.svg?style=flat-square)](https://github.com/7pou/@7pound/we-select)
[![](https://img.shields.io/codecov/c/github/7pou/@7pound/we-select.svg?style=flat-square)](https://github.com/7pou/@7pound/we-select)

小程序表单组件-Select选择器：

此组件对比原生Picker解决了一下问题

picker选中后返回的是range的下标, 如果在reactice-data中存选中项的index
view中显示选中值 需要配置为 range[index].fieldName
js中 提交数据时 也需要单独再次获取 range[index].key

使用Select组件支持model:value双向绑定的写法,也可以监听bindchange函数手动处理
使用Select可以像使用web端select组件一样,  在reactice-data存入选中项的值
view中显示选中值 就交给组件来处理
js中 提交数据时 可以直接取 reactice-data存入选中项的值

## 使用

1. 安装 Select

```
npm install --save @7pound/we-select
```

2. 构建npm

3. 在需要使用 Select 的页面 page.json 中添加 Select 自定义组件配置

```
{
  "usingComponents": {
    "WeSelect": "@7pound/we-select"
  }
}
```

4. 使用Select 组件

```html
<WeSelect range="{{ range }}" value="{{ value }}" bindChange="handleSelectChange" />
```


```js
Page({
  data: { value: '' },
  handleSelectChange(e) {
    console.log(e)
    this.setData({ value: e.detail.value })
  }
})
```



## 参数说明

| 参数          | 类型      | 是否必填 | 默认值    | 说明  |
| ------------ | --------------------- | ------ | -------- | ---------------------------- |
| value        | string  | 是     | null       | 初始值                        |
| index        | number    | 否     | null   | 初始下标                    |
| range | array<string\|AnyObject>| 否     | []  |    候选项                |
| range-key        | strinng | 否     | null     | 当 range 是一个 Object Array 时，通过 range-key 来指定 Object 中 key 的值作为选择器显示内容 |
| value-key     | string               | 否     | null     |   当 range 是一个 Object Array 时，通过 value-key 来指定 Object 中 value 的值作为组件的选中值 |
| disabled     | boolean              | 否     | false     | 禁用              |
| placeholder | string | 否     | null        | 未选择时的缺省显示                      |
| placeholder-style   | string | 否     | null | 未选择时的缺省显示的样式 |

## 事件

| 事件名称 | 说明  | 回调参数 |
| ------- | ------- | ------- |
| ready   | lifetime-ready  | 无 |
| detached| lifetime-detached  | 无 |
| change  | 选中值发生变化时触发  | detail\<value,index,current> |
| cancel  | 点击取消时触发 | 无 |




