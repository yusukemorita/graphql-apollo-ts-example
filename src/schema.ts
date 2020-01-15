import { gql } from 'apollo-server'


const typeDefs = gql`
  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    id: Int
    title: String
    author: Author
  }

  type Author {
    id: Int
    name: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
    authors: [Author]
    author(id: Int): Author
  }

  input CreateBookInput {
    title: String
    author: String
  }

  type Mutation {
    createBook(input: CreateBookInput): Book
  }
`

export default typeDefs
