module.exports = class Category extends require('./model') {

  /*获取类目 */
  static getList() {
    return new Promise((resolve, reject) => {
      let sql = 'SELECT id,`name` FROM category ORDER BY `index` DESC'
      this.query(sql).then(results => {
        resolve(results)
      }).catch(err => {
        console.log(`获取类目失败：${err.message}`)
        reject(err)
      })
    })
  }

  /*获取指定编号的类目详情 */
  static getCategoryById(id) {
    return new Promise((resolve, reject) => {
      let sql = 'SELECT id,`name`,`index` FROM category where id=?'
      this.query(sql,id).then(results => {
        resolve(results[0])
      }).catch(err => {
        console.log(`获取指定编号的类目详情失败：${err.message}`)
        reject(err)
      })
    })
  }
}