import * as tsx from 'vue-tsx-support'
import gql from 'graphql-tag'
import RepositoryEntity from '@/entities/Repository'
import Card from '@/components/Card'
import Button from '@/components/Button'

import { GetRepos_viewer } from './__generated__/GetRepos'
import styles from './styles.css'

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
        <div>
          <a href="https://github.com/andoshin11" target="_blank">
            andoshin11
          </a>
          's repositories list
        </div>
        <div class={styles.button}>
          <Button label="Click me!" onSuccess={e => alert(e.msg)} />
        </div>
        <div class={styles.list}>
          {this.repositories.map(repo => (
            <div class={styles.listItem}>
              <Card repository={repo} />
            </div>
          ))}
        </div>
      </div>
    )
  }
})
