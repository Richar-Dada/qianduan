import tagModel from '../models/tagModel'

export default {
  async create (data) {
    if (!data || !data.tag) return { resultCode: 508, errorMsg: '数据为空' }
    const temResult = await this.findAllByName(data.tag)
    if (temResult.length) return { resultCode: 508, errorMsg: '此标签已存在' }
    await tagModel.create({ name: data.tag })
    return { resultCode: 200, errorMsg: '添加成功' }
  },
  async findAllByName (name) {
    const result = await tagModel.findAll({
      where: { name: name }
    })
    return result
  },
  async findAll () {
    const result = await tagModel.findAll()
    return result
  },
  async delete (data) {
    console.log(data)
    if (!data || data.length === 0) return { resultCode: 508, errorMsg: '数据为空' }
    for (let i = 0; i < data.length; i++) {
      await tagModel.destroy({
        where: {
          name: data[i]
        }
      })
    }
    return { resultCode: 200, errorMsg: '删除成功' }
  }
}