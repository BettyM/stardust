import gql from 'graphql-tag'

const GetVisitor = gql`
  query getVisitor($id: Int!) {
    post(id: $id) {
        id
        name
    }
  }
`

export default GetVisitor
