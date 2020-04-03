module.exports = class Article extends require('./model') {

  /*获取热门推荐文章*/
  static getHot(num) {
    return new Promise((resolve, reject) => {
      let sql = 'SELECT id,title,content,`time`,thumbnail FROM article WHERE hot=1 LIMIT ?'
      this.query(sql, num).then(results => {
        resolve(results)
      }).catch(err => {
        console.log(`获取热门推荐文章失败：${err.message}`)
        reject(err)
      })
    })
  }
  /*获取文章列表 */
  static getList() {
    return new Promise((resolve, reject) => {
      let sql = 'SELECT id,title,content,`time` FROM article ORDER BY TIME DESC'
      this.query(sql).then(results => {
        resolve(results)
      }).catch(err => {
        console.log(`获取文章列表失败：${err.message}`)
        reject(err)
      })
    })
  }

  /*获取指定类目下的列表 */
  static getListByCategoryId(id) {
    return new Promise((resolve, reject) => {
      let sql = 'SELECT id,title,content,`time` FROM article WHERE category_id=? ORDER BY TIME DESC'
      this.query(sql, id).then(results => {
        resolve(results)
      }).catch(err => {
        console.log(`获取指定类目下的文章列表失败：${err.message}`)
        reject(err)
      })
    })
  }

  /*获取指定关键词的文章列表 */
  static getListBykeyword(keyword) {
    return new Promise((resolve, reject) => {
      let sql = 'SELECT id,title,content,`time` FROM article WHERE title LIKE ? ORDER BY TIME DESC'
      this.query(sql, `%${keyword}%`).then(results => {
        resolve(results)
      }).catch(err => {
        console.log(`获取指定关键词的文章列表失败：${err.message}`)
        reject(err)
      })
    })
  }
  /**获取指定文章的详情 */
  static getArticleById(id) {
    return new Promise((resolve, reject) => {
      let sql = 'SELECT a.id,a.title,a.content,a.`time`,a.hits,a.`category_id`,c.`name`,a.`thumbnail`,a.`hot` From article a,category c  WHERE a.`category_id` = c.`id` AND a.id = ?'
      this.query(sql, id).then(results => {
        resolve(results[0])
      }).catch(err => {
        console.log(`获取指定文章的详情失败：${err.message}`)
        reject(err)
      })
    })
  }

  // 获取上一篇文章
  static getPrevArticle(id) {
    return new Promise((resolve, reject) => {
      let sql = 'SELECT id,title From article WHERE id<? ORDER BY id DESC LIMIT 1'
      this.query(sql, id).then(results => {
        resolve(results[0])
      }).catch(err => {
        console.log(`获取上一篇文章失败：${err.message}`)
        reject(err)
      })
    })
  }

   // 获取下一篇文章
   static getNextArticle(id) {
    return new Promise((resolve, reject) => {
      let sql = 'SELECT id,title From article WHERE id>? ORDER BY id ASC LIMIT 1'
      this.query(sql, id).then(results => {
        resolve(results[0])
      }).catch(err => {
        console.log(`获取上一篇文章失败：${err.message}`)
        reject(err)
      })
    })
  }
}