import * as tsx from 'vue-tsx-support'
import styles from './styles.css'

export default tsx.component({
  name: 'Title',
  props: {
    label: {
      type: String,
      required: true as true
    }
  },
  render() {
    return <div class={styles.Title}>{this.label}</div>
  }
})
