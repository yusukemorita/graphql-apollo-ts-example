import { RESTDataSource } from 'apollo-datasource-rest'
import Book from '../models/Book'

export default class BookAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'http://localhost:3000'
  }

  async getBooks(): Promise<Book[]> {
    const response = await this.get('/books')
    console.log(response)
    return response
  }
}
