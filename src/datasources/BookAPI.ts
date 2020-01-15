import { RESTDataSource } from 'apollo-datasource-rest'
import Book from '../models/book/Book'
import CreateBookInput from '../models/book/CreateBookInput'

export default class BookAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'http://localhost:3000'
  }

  async getBooks(): Promise<Book[]> {
    const response = await this.get('/books')
    return response
  }

  async createBook(input: CreateBookInput): Promise<Book> {
    const response = await this.post('/books', { title: input.title, authorId: input.authorId })
    console.log(response)
    return response
  }
}
