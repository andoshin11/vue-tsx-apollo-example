import * as tsx from 'vue-tsx-support'
import RepositoryEntity from '@/entities/Repository'

export default tsx.component({
  name: 'Card',
  props: {
    repository: {
      type: Object as () => RepositoryEntity,
      required: true as true
    }
  },
  render() {
    return (
      <div style={styles.card}>
        <a href={this.repository.props.url} target="_blank" style={styles.name}>
          {this.repository.props.name}
        </a>
        <div style={styles.description}>
          {this.repository.props.description}
        </div>
        <div style={styles.info}>
          {this.repository.props.primaryLanguage ? (
            <div style={styles.lang}>
              <div
                style={{
                  ...styles.langColor,
                  backgroundColor:
                    this.repository.props.primaryLanguage.color || ''
                }}
              />
              <div style={styles.langName}>
                {this.repository.props.primaryLanguage.name}
              </div>
            </div>
          ) : null}
          <div style={styles.star}>
            <div style={styles.starIcon}>
              <svg
                aria-hidden="true"
                data-prefix="fas"
                data-icon="star"
                class="svg-inline--fa fa-star fa-w-18"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                />
              </svg>
            </div>
            <div style={styles.starCount}>
              {this.repository.props.stargazers.totalCount}
            </div>
          </div>
          <div style={styles.fork}>
            <div style={styles.forkIcon}>
              <svg
                aria-hidden="true"
                data-prefix="fas"
                data-icon="code-branch"
                class="svg-inline--fa fa-code-branch fa-w-12"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  fill="currentColor"
                  d="M384 144c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 36.4 24.3 67.1 57.5 76.8-.6 16.1-4.2 28.5-11 36.9-15.4 19.2-49.3 22.4-85.2 25.7-28.2 2.6-57.4 5.4-81.3 16.9v-144c32.5-10.2 56-40.5 56-76.3 0-44.2-35.8-80-80-80S0 35.8 0 80c0 35.8 23.5 66.1 56 76.3v199.3C23.5 365.9 0 396.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-34-21.2-63.1-51.2-74.6 3.1-5.2 7.8-9.8 14.9-13.4 16.2-8.2 40.4-10.4 66.1-12.8 42.2-3.9 90-8.4 118.2-43.4 14-17.4 21.1-39.8 21.6-67.9 31.6-10.8 54.4-40.7 54.4-75.9zM80 64c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm0 384c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm224-320c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16z"
                />
              </svg>
            </div>
            <div style={styles.forkCount}>
              {this.repository.props.forkCount}
            </div>
          </div>
          {this.repository.props.isFork ? (
            <span style={styles.forked}>forked</span>
          ) : null}
        </div>
      </div>
    )
  }
})

const styles = {
  card: {
    borderRadius: '3px',
    border: 'solid 1px #d1d5da',
    padding: '16px',
    textAlign: 'left',
    fontSize: '14px'
  },
  name: {
    display: 'block',
    marginBottom: '8px',
    fontSize: '16px'
  },
  lang: {
    display: 'flex',
    alignItems: 'center'
  },
  langColor: {
    marginTop: '-2px',
    width: '11px',
    height: '11px',
    borderRadius: '50%',
    marginRight: '4px'
  },
  langName: {
    marginRight: '16px'
  },
  description: {
    textAlign: 'left',
    marginBottom: '16px',
    minHeight: '40px'
  },
  info: {
    display: 'flex',
    alignItems: 'center',
    lineHeight: '16px'
  },
  star: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '16px'
  },
  starIcon: {
    marginTop: '-1px',
    width: '14px',
    height: '14px',
    marginRight: '4px'
  },
  starCount: {},
  fork: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '16px'
  },
  forkIcon: {
    marginTop: '-4px',
    width: '10px',
    height: '10px',
    marginRight: '6px'
  },
  forkCount: {},
  forked: {
    border: 'solid 1px #ddd',
    borderRadius: '4px',
    padding: '2px 8px'
  }
}
