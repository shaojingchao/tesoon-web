/**
 * Created by 邵敬超 on 2017/9/6.
 */

const Mock = require('mockjs')
import pic from '@/assets/img/news-01.jpg'
Mock.mock(/api\/data/, (req, res) => {
  console.log(req)
  return Mock.mock({
    'data|4': [
      {
        'id|+1': 202,
        title: '天星携手私家车999和许昌学院小书虫公益书屋走进梁北二中',
        context: '4月21日下午，河南天星教育传媒股份有限公司副总经理吴涛和营销中心的两位同事一起，带着天星教育疯狂阅读部的500册图书，来到禹州市梁北镇第二初级中学，为这里的孩子们送去我们的一分爱心。',
        time: Mock.Random.date(),
        author: '文/营销中心 倪秋利',
        cate: '集团新闻',
        pic: Mock.Random.image('180x120')
      }
    ]
  })
})

Mock.mock(/api\/new$/, {
  'data|6': [
    {
      'id|+1': 200,
      title: '天星携手私家车999和许昌学院小书虫公益书屋走进梁北二中',
      time: Mock.Random.date(),
      pic: pic,
      cate: '集团新闻'
    }
  ]
})

Mock.mock(/api\/news\/\d+/, {
  'data': {
    title: '天星携手私家车999和许昌学院小书虫公益书屋走进梁北二中',
    context: Mock.Random.cparagraph(80),
    time: Mock.Random.date(),
    author: '文/营销中心 倪秋利',
    cate: '集团新闻'
  }
})
