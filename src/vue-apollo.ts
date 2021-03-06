import Vue from 'vue'
import VueApollo from 'vue-apollo'
import { ApolloLink, concat } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'

Vue.use(VueApollo)

const accessToken = process.env.VUE_APP_GITHUB_API_TOKEN
const authMiddleware = new ApolloLink((operation, forward) => {
  if (!forward) {
    return null
  }
  operation.setContext({
    headers: {
      Authorization: `bearer ${accessToken}`,
      Accept: 'application/vnd.github.v4.idl'
    }
  })
  return forward(operation)
})

const httpLink = new HttpLink({
  uri: 'https://api.github.com/graphql'
})

const apolloClient = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache()
})

export const createProvider = () =>
  new VueApollo({
    defaultClient: apolloClient,
    defaultOptions: {
      $loadingKey: 'loading'
    }
  })
