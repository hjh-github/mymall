// 引入mockjs
const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;
// mock一组数据
const indexData = {
    'loops|3':[Random.image('720x300','','','jpg','')],
    'cate|4':[{
        'img':Random.image('125x125','','','png',''),
        'title':Random.cname(),
        'describe':Random.cparagraph(7,12)
    }],
    'goodslist|20':[{
        'img':Random.image('125x125','','','png',''),
        'title':Random.cname(),
        'describe':Random.cparagraph(1,3),
        'price|1000-10000':1000,
        'serverName':Random.ctitle(4),
        'setDate':Random.boolean(),
        'hots':Random.boolean(),
        'collect|0-99':1
    }]
}
const orderData = {
    'orderlist|3-7':[{
        'img':Random.image('125x125','','','png',''),
        'title':Random.cname(),
        'describe':Random.cparagraph(1,3),
        'price|1000-10000':1000,
        'serverName':Random.ctitle(4),
        'setDate':Random.boolean(),
        'hots':Random.boolean(),
        'collect|0-99':1,
        'state|0-1':0
    }]
} 
// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/news/index', 'get', indexData);
// 订单接口
Mock.mock('/order','get',orderData);
