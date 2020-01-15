import BookAPI from "./datasources/BookAPI"
import AuthorAPI from "./datasources/AuthorAPI"
import CreateBookInput from './models/book/CreateBookInput'

interface DataSources {
  bookAPI: BookAPI,
  authorAPI: AuthorAPI
}

const resolvers = {
  Query: {
    books: (_: null, __: null, { dataSources }: { dataSources: DataSources }) => {
      return dataSources.bookAPI.getBooks()
    },
    authors: (_: null, __: null, { dataSources }: { dataSources: DataSources }) => {
      return dataSources.authorAPI.getAuthors()
    },
    author: (_: null, { id }: { id: number }, { dataSources }: { dataSources: DataSources }) => {
      return dataSources.authorAPI.getAuthor(id)
    },
  },

  Book: {
    author({ authorId }: { authorId: number }, _: null, { dataSources }: { dataSources: DataSources }) {
      return dataSources.authorAPI.getAuthor(authorId)
    }
  },

  Mutation: {
    createBook: async (_: null, { input }: { input: CreateBookInput }, { dataSources }: { dataSources: DataSources }) => {
      const book = dataSources.bookAPI.createBook(input)
      return book
    }
  }
}

export default resolvers
