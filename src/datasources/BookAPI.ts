import { RESTDataSource } from 'apollo-datasource-rest'
import { Book, CreateBookInput } from '../types'

export default class BookAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'http://localhost:3000'
  }

  async getBooks(): Promise<Book[]> {
    return await this.get('/books')
  }

  async createBook(input: CreateBookInput): Promise<Book> {
    return await this.post('/books', { title: input.title, authorId: input.authorId })
  }
}
