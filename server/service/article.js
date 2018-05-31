import articleModel from '../models/articleModel'

export default {
  async create (data) {
    if (!data) return { resultCode: 508, errorMsg: '数据为空' }
    await articleModel.create(data)
    return { resultCode: 200, errorMsg: '文章创建成功' }
  },
  async findAll () {
    const result = await articleModel.findAll()
    return result
  }
}