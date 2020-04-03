const mysql = require('mysql')

module.exports = class Model {
  static conn = null
  static connection() {
    Model.conn = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'blog'
    })
    Model.conn.connect(err => {
      if (err) {
        console.log(`数据库连接失败：${err.message}`)
      }
    })
  }
  // 关闭数据库连接
  static end() {
    if (null != Model.conn) {
      Model.conn.end()
    }
  }
  static query(sql, params = []) {
    return new Promise((resolve, reject) => {
      this.connection()
      Model.conn.query(sql, params, (err, results) => {
        if (err) {
          reject(err)
        } else {
          resolve(results)
        }
      })
      this.end()
    })
  }
}