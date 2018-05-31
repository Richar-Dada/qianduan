import articleModel from '../models/articleModel'

export default {
  async create (data) {
    const result = await articleModel.create(data)
    console.log('service--------------')
    console.log(result)
    return result
  },
  async findAll () {
    const result = await articleModel.findAll()
    return result
  }
}