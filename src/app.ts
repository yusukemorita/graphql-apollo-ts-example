import { ApolloServer } from 'apollo-server'
import { importSchema } from 'graphql-import'
import resolvers from './resolvers'
import BookAPI from './datasources/BookAPI'
import AuthorAPI from './datasources/AuthorAPI'

const typeDefs = importSchema('src/graphql/schema.graphql')

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: (): { bookAPI: BookAPI, authorAPI: AuthorAPI } => ({
    bookAPI: new BookAPI(),
    authorAPI: new AuthorAPI()
  })
})

// The `listen` method launches a web server.
server.listen().then(({ url }: { url: string }) => {
  console.log(`🚀  Server ready at ${url}`);
})
