import * as tsx from 'vue-tsx-support'
import Title from '@/components/Title'
import styles from './styles.css'

export default tsx.component({
  name: 'Header',
  methods: {
    sayHi(msg: string) {
      alert(msg)
    }
  },
  render() {
    return (
      <header style={styles.Header}>
        <Title label="Vue tsx example (powered by Apollo)" />
      </header>
    )
  }
})
