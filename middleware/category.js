const Category = require('../model/category')
/*文件中间件*/
module.exports = {
  /*
  *获取类目列表
  */
 getList:(req,res,next)=>{
  Category.getList().then(results => {
    req.categories = results
    next()
  }).catch(err => {
    next(err)
  })
 },
  /*
  *获取指定文章类目详情
  */
 getCategoryById:(req,res,next)=>{
   let id=req.params.id
  Category.getCategoryById(id).then(results => {
    req.category = results
    next()
  }).catch(err => {
    next(err)
  })
 }
}