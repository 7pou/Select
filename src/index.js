
Component({
  properties: {
    range: {type: Array, value: []},
    value: {type: String},
    // 为兼容低版本 value 类型 暂不使用 optionalTypes, 照成的影响为使用model:value时,绑定的值会始终为string类型
    // value: {optionalTypes: [String, Number]},
    index: {type: Number, value: -1},
    disabled: {type: Boolean, value: false},
    placeholder: {type: String, value: '请选择'},
    placeholderStyle: {type: String, value: ''},
    rangeKey: {type: String, value: ''},
    valueKey: {type: String, value: ''}
  },
  lifetimes: {
    ready() {
      this.triggerEvent('ready')
    },
    detached() {
      this.triggerEvent('detached')
    }
  },
  methods: {
    update({value, index}) {
      if (value || value === 0) {
        this.setData({value})
      }
      if (index || index === 0) {
        this.setData({index})
      }
    },
    handleChange(e) {
      const current = this.data.range[e.detail.value]
      const value = this.data.valueKey ? current[this.data.valueKey] : current
      const index = Number(e.detail.value)
      const detail = {
        value,
        current,
        index,
      }
      this.update({value, index})
      this.triggerEvent('change', detail)
    },
    handleCancel(e) {
      this.triggerEvent('cancel', e.detail)
    }
  }
})
