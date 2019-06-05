const express = require('express');
const cors = require('cors');
const graphqlHTTP = require('express-graphql');
const gql = require('graphql-tag')
const { buildASTSchema } = require('graphql')

const POSTS = [
  { name: "Betty", comment: "Hello world" },
]

const schema = buildASTSchema(gql`
  type Query {
    posts: [Post]
    post(id: ID!): Post
  }
  type Post {
    id: ID
    name: String
    comment: String
    image: String
  }
  type Mutation {
    submitPost(input: PostInput!): Post
  }
  input PostInput {
    id: ID
    name: String
    comment: String
  }
`)

const mapPost = (post, id) => post && ({ id, ...post })

const root = {
  posts: () => POSTS.map(mapPost),
  post: ({ id }) => mapPost(POSTS[id], id),
}

const app = express()
app.use(cors())
app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true,
}))

const port = process.env.PORT || 4000
app.listen(port)
console.log(`Running a GraphQL API server at localhost:${port}/graphql`)
