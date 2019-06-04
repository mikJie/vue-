import Mock from 'mockjs'
const data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'menu': [
        {
            name:'运行监测',
            id:'1',
            children:[
                {
                    name:'导航1',
                    id:'1-1',
                    path:'/page1'
                },
                {
                    name:'导航2',
                    id:'1-2',
                    path:'/page2'
                },
                {
                    name:'导航3',
                    id:'1-3',
                    path:'/page3'
                }
            ]
        },{
            name:'导航4',
            id:'2',
            path:'/page4'
        },{
            name:'导航5',
            id:'3',
            path:'/page5'
        }

    ],
})
Mock.mock("/getTest",() => ({
    code:'200',
    data
}))