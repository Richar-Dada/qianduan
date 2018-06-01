import articleModel from '../models/articleModel'

export default {
  async create (data) {
    if (!data) return { resultCode: 508, errorMsg: '数据为空' }
    console.log(data.content.length)
    await articleModel.create(data)
    return { resultCode: 200, errorMsg: '文章创建成功' }
  },
  async findAll () {
    const result = await articleModel.findAll()
    return { resultCode: 200, data: result }
  },
  async findById (id) {
    const result = await articleModel.findById(id)
    return { resultCode: 200, data: result }
  },
  async update (data) {
    console.log(data)
    if (!data) return { resultCode: 508, errorMsg: '数据为空' }
    try {
      await articleModel.update(data, {
        where: { id: data.id }
      })
      return { resultCode: 200, errorMsg: '文章修改成功' }
    } catch (e) {
      console.log(e)
    }
  },
}