import Mock from 'mockjs'

//swiper接口数据
Mock.mock('/swiper','get',{
    'list|5':[
        {
            'src|+1':['http://pic44.nipic.com/20140723/18505720_094503373000_2.jpg','http://pic33.nipic.com/20130914/1754547_104545974000_2.jpg','http://pic19.nipic.com/20120309/9538302_001935355137_2.jpg','http://img3.imgtn.bdimg.com/it/u=1353108592,3362785779&fm=26&gp=0.jpg','http://pic26.nipic.com/20121217/9252150_101201834000_2.jpg'],
            'id|+1':1
        }
    ]
})


//商品数据
let shoppingData=Mock.mock({
    'list|10':[
        {
            'id|+1':1,
            'src|+1':['http://pic44.nipic.com/20140723/18505720_094503373000_2.jpg','http://pic33.nipic.com/20130914/1754547_104545974000_2.jpg','http://pic19.nipic.com/20120309/9538302_001935355137_2.jpg','http://img3.imgtn.bdimg.com/it/u=1353108592,3362785779&fm=26&gp=0.jpg','http://pic26.nipic.com/20121217/9252150_101201834000_2.jpg'],
            'name':'@ctitle(7,10)',
            'text':'@ctitle(20,30)',
            'price|10-99':1,
            'count':1,
            'flag':false
        }
    ]
})

Mock.mock('/shopping','get',{
    list:shoppingData.list
})




//上拉加载，下拉刷新的接口数据
Mock.mock('/pull-list','post',(options)=>{
    let {count,page}=JSON.parse(options.body);
    let data=Mock.mock({
        'list|1000':[
            {
                'id|+1':1,
                'src':'http://pic44.nipic.com/20140723/18505720_094503373000_2.jpg',
                'title':'测试上拉加载下拉刷新的模拟数据',
                'name':'@cname'
            }
        ]
    })
    let list=data.list.slice((page-1)*count,page*count)
    return {
        list
    }
})

 let data=Mock.mock({
    'list|150':[
        {
            'id|+1':1,
            'name':'@cname',
            'age|18-30':1,
            'sex|1':['男','女'],
            'love|1':['打豆豆','睡觉','吃饭','滑雪','跳舞','篮球','KTV','跑步','极限运动','跳伞']
        }
    ]
})

//这是表格的模拟数据
Mock.mock('/table-list','post',(options)=>{
    // console.log(options.body);
    let {count,page}=JSON.parse(options.body)
    let list=data.list.slice((page-1)*count,page*count)
    // console.log(list);
    return {
        count,page,
        total:data.list.length,
        list
    }
})

//这是收藏，取消收藏的数据
let collectData=Mock.mock({
    'list|5':[
        {
            'id|+1':1,
            'src|+1':['http://pic44.nipic.com/20140723/18505720_094503373000_2.jpg','http://pic33.nipic.com/20130914/1754547_104545974000_2.jpg','http://pic19.nipic.com/20120309/9538302_001935355137_2.jpg','http://img3.imgtn.bdimg.com/it/u=1353108592,3362785779&fm=26&gp=0.jpg','http://pic26.nipic.com/20121217/9252150_101201834000_2.jpg'],
            'title':'@ctitle',
            'price|132-386':1,
            'num|100-210':1
        }
    ]
})
let attention=Mock.mock({
    'list|5':[
        {
            'id|+1':1,
            'src|+1':['http://pic44.nipic.com/20140723/18505720_094503373000_2.jpg','http://pic33.nipic.com/20130914/1754547_104545974000_2.jpg','http://pic19.nipic.com/20120309/9538302_001935355137_2.jpg','http://img3.imgtn.bdimg.com/it/u=1353108592,3362785779&fm=26&gp=0.jpg','http://pic26.nipic.com/20121217/9252150_101201834000_2.jpg'],
            'title':'@ctitle',
            'price|132-386':1,
            'num|100-210':1
        }
    ]
})
Mock.mock('/collect','get',{
    list:collectData.list,
    data:attention.list
})

