// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.

interface CreateBookInput {
  title: string
  author: string
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
    books: () => books,
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
