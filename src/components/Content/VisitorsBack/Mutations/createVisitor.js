import gql from 'graphql-tag'

const CreateVisitor = gql`
  mutation CreateVisitor($name: String!){
    createVisitor(input: { name: $name }) {
        cursor
        node {
            id
            name
        }
     }
   }
`

export default CreateVisitor
