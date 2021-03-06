const Article = require('../model/article')
const Tab=require('../model/tab')
/*文件中间件*/
module.exports = {
  /*
  *获取热门文章
  */
  getHot: (req, res, next) => {
    Article.getHot(3).then(results => {
      req.hots = results
      next()
    }).catch(err => {
      next(err)
    })
  },
  /*
  *获取最新文章
  */
 getList:(req,res,next)=>{
  Article.getList().then(results => {
    req.articles = results
    next()
  }).catch(err => {
    next(err)
  })
 },

 getListByCategoryId:(req,res,next)=>{
   let id=req.params.id
  Article.getListByCategoryId(id).then(results => {
    req.articles = results
    next()
  }).catch(err => {
    next(err)
  })
 },
// 获取指定关键词的文章列表
getListBykeyword:(req,res,next)=>{
  let keyword=req.query.keyword
 Article.getListBykeyword(keyword).then(results => {
   req.articles = results
   next()
 }).catch(err => {
   next(err)
 })
},

// 获取指定文章详情
getArticleById:(req,res,next)=>{
  let id=req.params.id
 Article.getArticleById(id).then(results => {
   req.article = results
   next()
 }).catch(err => {
   next(err)
 })
},

// 获取指定文章的标签列表
getTabs:(req,res,next)=>{
  let id=req.params.id
  Tab.getListByArticleId(id).then(results => {
    req.tabs = results
    next()
  }).catch(err => {
    next(err)
  })
},

// 上一篇文章
getPrev:(req,res,next)=>{
  let id=req.params.id
  Article.getPrevArticle(id).then(results => {
    req.prev = results
    next()
  }).catch(err => {
    next(err)
  })
},

// 下一篇文章
getNext:(req,res,next)=>{
  let id=req.params.id
  Article.getNextArticle(id).then(results => {
    req.next = results
    next()
  }).catch(err => {
    next(err)
  })
}
}