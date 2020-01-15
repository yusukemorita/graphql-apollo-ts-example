import { gql } from 'apollo-server'


const typeDefs = gql`
  input CreateBookInput {
    title: String
    author: String
  }

  type Mutation {
    createBook(input: CreateBookInput): Book
  }
`

export default typeDefs
