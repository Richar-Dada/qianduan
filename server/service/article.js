import articleModel from '../models/articleModel'
var { Sequelize } = require('sequelize')
const Op = Sequelize.Op

export default {
  async create (data) {
    if (!data) return { resultCode: 508, errorMsg: '数据为空' }
    await articleModel.create(data)
    return { resultCode: 200, errorMsg: '文章创建成功' }
  },
  async findAll ({ tag, page = 1 } = { tag: '', page: 1 }) {
    try {
      if (tag && tag !== 'all') {
        const result = await articleModel.findAndCountAll({
          where: { tags: { [Op.like]: '%'+tag+'%' } },
          order: [
            ['id', 'DESC'],
          ],
          limit: 10,
          offset: (page - 1) * 10
        })
        return { resultCode: 200, data: result.rows, allCount: result.count }
      } else if (tag === 'all') {
        const result = await articleModel.findAndCountAll({
          where: { publish: 1 },
          order: [
            ['id', 'DESC'],
          ],
          limit: 10,
          offset: (page - 1) * 10
        })
        return { resultCode: 200, data: result.rows, allCount: result.count }
      }

      const result = await articleModel.findAndCountAll({
        order: [
          ['id', 'DESC'],
        ],
        limit: 10,
        offset: (page - 1) * 10
      })
      
      return { resultCode: 200, data: result.rows, allCount: result.count }
    } catch (e) {
      console.log(e)
    }
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