import ApolloClient from 'apollo-boost'

export default new ApolloClient({
//const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
})

/*
export const getVisitors = () => {
}

export const getVisitor = (id) => {
}

export const postVisitor = (data) => {
  console.log('POST', data)
  client.query({
    query: gql`
    mutation submitPost($name: ${data.name}, $comment: ${data.comment})
    `
  }).then(response => response.data)
}
*/
