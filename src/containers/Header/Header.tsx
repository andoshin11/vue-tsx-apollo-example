import * as tsx from 'vue-tsx-support'

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100px'
  },
  inner: {
    fontSize: '24px'
  }
}

export default tsx.component({
  name: 'Header',

  render() {
    return (
      <header style={styles.header}>
        <div style={styles.inner}>Vue tsx example (powered by Apollo)</div>
      </header>
    )
  }
})
