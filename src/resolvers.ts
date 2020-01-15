import BookAPI from "./datasources/BookAPI"
import AuthorAPI from "./datasources/AuthorAPI"
import Book from './models/book'

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.

interface CreateBookInput {
  title: string
  author: string
}

interface DataSources {
  bookAPI: BookAPI,
  authorAPI: AuthorAPI
}

const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  }
]

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
    author({ author_id }: { author_id: number }, _: null, { dataSources }: { dataSources: DataSources }) {
      return dataSources.authorAPI.getAuthor(author_id)
    }
  },

  Mutation: {
    createBook: (_: null, { input }: { input: CreateBookInput }) => {
      const book = { title: input.title, author: input.author }
      books.push(book)
      return book
    }
  }
}

export default resolvers
