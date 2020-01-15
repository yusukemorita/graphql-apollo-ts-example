import { RESTDataSource } from 'apollo-datasource-rest'
import { Author } from '../types'

export default class AuthorAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'http://localhost:3000'
  }

  async getAuthors(): Promise<Author[]> {
    const response = await this.get('/authors')
    return response
  }

  async getAuthor(id: number): Promise<Author> {
    const response = await this.get(`/authors/${id}`)
    return response
  }
}
