/**
 * Created by 邵敬超 on 2017/9/6.
 */

const Mock = require('mockjs')

import pic from '@/assets/img/news-01.jpg'

Mock.setup({
  timeout: '10-1500'
})

Mock.mock(/api\/data/, (req, res) => {
  let arr = []
  for (let i = 0; i < 4; i++) {
    let item = Mock.mock({
      'id|+1': 202,
      'title': Mock.Random.cword(20, 40),
      'context|7-10': Mock.Random.cparagraph(),
      time: Mock.Random.date(),
      author: '文/营销中心 倪秋利',
      cate: '集团新闻',
      pic: Mock.Random.image('180x120', Mock.Random.color(), '#ffffff', 'News Image')
    })
    arr.push(item)
  }
  return {
    data: arr
  }
})

Mock.mock(/api\/new$/, {
  'data|6': [
    {
      'id|+1': 200,
      title: Mock.Random.cword(20, 40),
      time: Mock.Random.date(),
      pic: pic,
      cate: '集团新闻'
    }
  ]
})

Mock.mock(/api\/news\/\d+/, {
  'data': {
    title: Mock.Random.cword(20, 40),
    context: Mock.Random.cparagraph(80),
    time: Mock.Random.date(),
    author: '文/营销中心 倪秋利',
    cate: '集团新闻'
  }
})
