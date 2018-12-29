import * as tsx from 'vue-tsx-support'
import gql from 'graphql-tag'
import { GetRepos_viewer } from './__generated__/GetRepos'
import Card from '@/components/Card'
import RepositoryEntity from '@/entities/Repository'

const getReposQuery = gql`
  query GetRepos {
    viewer {
      repositories(
        first: 100
        orderBy: { field: UPDATED_AT, direction: DESC }
      ) {
        nodes {
          name
          url
          description
          isFork
          primaryLanguage {
            name
            color
          }
          forkCount
          stargazers {
            totalCount
          }
        }
      }
    }
  }
`

interface IData {
  viewer: GetRepos_viewer | null
}

export default tsx.component({
  name: 'Repositories',
  apollo: {
    viewer: {
      query: getReposQuery
    }
  },
  data(): IData {
    return {
      viewer: null
    }
  },
  computed: {
    repositories(): RepositoryEntity[] {
      if (
        !this.viewer ||
        !this.viewer.repositories ||
        !this.viewer.repositories.nodes
      )
        return []

      return this.viewer.repositories.nodes.reduce(
        (arr, node) => {
          if (node) {
            arr.push(new RepositoryEntity(node))
          }
          return arr
        },
        [] as RepositoryEntity[]
      )
    }
  },
  render() {
    return (
      <div>
        <div>andoshin11's repositories</div>
        <div style={styles.list}>
          {this.repositories.map(repo => (
            <div style={styles.listItem}>
              <Card repository={repo} />
            </div>
          ))}
        </div>
      </div>
    )
  }
})

const styles = {
  list: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '780px',
    margin: '40px auto'
  },
  listItem: {
    boxSizing: 'border-box',
    width: '50%',
    padding: '16px'
  }
}
