import articleModel from '../models/articleModel'

export default {
  async create (data) {
    if (!data) return { resultCode: 508, errorMsg: '数据为空' }
    console.log(data.content.length)
    await articleModel.create(data)
    return { resultCode: 200, errorMsg: '文章创建成功' }
  },
  async findAll (tag) {
    console.log(tag)
    if (tag && tag !== 'all') {
      const result = await articleModel.findAll({
        where: { tag: { [Op.like]: '%' + tag + '%' } }
      })
      return { resultCode: 200, data: result }
    }

    const result = await articleModel.findAll({
      where: { publish: 1 }
    })
    return { resultCode: 200, data: result }
  },
  async findById (id) {
    const result = await articleModel.findById(id)
    return { resultCode: 200, data: result }
  },
  async update (data) {
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
  async delete (data) {
    if (!data && data.id) return { resultCode: 508, errorMsg: '数据为空' }
    
    try {
      const result = await articleModel.destroy({
        where: {
          id: data.id
        }
      })

      if (result) {
        return { resultCode: 200, errorMsg: '删除成功' }
      } else {
        return { resultCode: 508, errorMsg: '删除失败' }
      }
    } catch(e) {
      console.log(e)
    }
  }
}