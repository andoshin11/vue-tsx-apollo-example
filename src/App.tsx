import * as tsx from 'vue-tsx-support'
import Header from '@/containers/Header'
import styles from './styles.css'

export default tsx.component({
  name: 'App',
  render() {
    return (
      <div id="app" class={styles.app}>
        <div class>
          <Header />
        </div>
        <router-view />
        <a
          href="https://github.com/andoshin11/vue-tsx-apollo-example"
          target="_blank"
          class={styles.github}
        >
          GitHub
        </a>
      </div>
    )
  }
})
