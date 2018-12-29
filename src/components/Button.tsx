import * as tsx from 'vue-tsx-support'

interface Events {
  onSuccess: { msg: string }
}

export default tsx.componentFactoryOf<Events>().create({
  name: 'Button',
  props: {
    label: {
      type: String,
      required: true as true
    }
  },
  render() {
    return (
      <button onClick={() => this.$emit('success', { msg: 'Button Clicked' })}>
        {this.label}
      </button>
    )
  }
})
