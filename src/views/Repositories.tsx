import * as tsx from 'vue-tsx-support'
import gql from 'graphql-tag'
import { myrepo_viewer, myrepoVariables } from './__generated__/myrepo'

const getReposQuery = gql`
  query myrepo($number_of_repos: Int!) {
    viewer {
      name
      repositories(last: $number_of_repos) {
        nodes {
          name
          url
          description
          isPrivate
        }
      }
    }
  }
`

interface IData {
  viewer: myrepo_viewer | null
}

export default tsx.component({
  name: 'Repositories',

  apollo: {
    viewer: {
      query: getReposQuery,
      variables(): myrepoVariables {
        return {
          number_of_repos: 20
        }
      }
    }
  },
  data(): IData {
    return {
      viewer: null
    }
  },
  render() {
    return (
      <div>
        <label>Test</label>
        {this.viewer ? <div>{this.viewer.name}</div> : null}
      </div>
    )
  }
})
