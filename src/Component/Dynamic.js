import React, { Component } from 'react'

// 解析DOM由pos作为基准 pos决定HTML骨架 style决定样式 cn与pos共同决定选择器

// 注意 其结构最好使用对象而不使用数组 样式使用数组

let rule_obj = {
    pos: 1,     // 元素在对象中的坐标
    style: {    // 挂载样式

    },
    cn: [],      // 内置样式类
    dad: 1      // 父元素 
}

let obj1 = {
    pos: 1,
    style: {

    },
    cn: [],
    // dad:1      
}

let obj2 = {
    pos: 1,
    style: {

    },
    cn: [],
    // dad:1      
}

let obj3 = {
    pos: 1,
    style: {

    },
    cn: [],
    // dad:1      
}

let sx = {
    list: {
        name: "BB_list",
        // style:{

        // },
        child: {
            name: "",
            style: {
                fontWeight: 900,
                fontSize: 20,
            },
        }
    },
    data: {
        data: [
            {
                id: 1,
                name: '黄俊',
                time: '',
                local: '',
                title: '',  // 非必须
                content: '',
                tags: [],
                comment: [],
                zujian: <ChoiceQuestion />,
                // zujian:'ChoiceQuestion',
                reward: {
                    other: [],
                    mine: false,
                }
            },
            {
                id: 2,
                name: '江骏平',
                time: '',
                local: '',
                title: '',  // 非必须
                content: '',
                tags: [],
                comment: [],
                reward: {
                    other: [],
                    mine: true,
                }
            },
            {
                id: 3,
                name: '范海文',
                time: '',
                local: '',
                title: '',  // 非必须
                content: '',
                tags: [],
                comment: [],
                reward: {
                    other: [],
                    mine: false,
                }
            },
        ]
    }
}

let domarr = []

export default class Dynamic extends Component {

    // pos的重复判断防止位置重复 类似于目录结构 需要设置处理方法

    // 

    // dad也需要设置处理方法

    mapping(arr) {
        let obj = {}
    
        for(let i = 0;i < arr.length;i++){
            if(arr[i].dad){
                obj[arr[i].dad - 1].child = {...arr[i]}
            }
            else{
                obj[i] = {...arr[i]}
                console.log(obj);
            }
        }
        return obj
    }

    componentDidMount() {
        this.analysis_dom(this.refs.hj)
        console.log(domarr);
        let a = this.mapping([obj1,obj2,obj3])
    }

        // 解析DOM函数 处理BB文件映射关系前解析DOM树 使得元素与样式一一对应
        analysis_dom(dom) {
            let arr = dom.children
            // console.log(arr);
            for(let i = 0;i < arr.length;i++){
                // console.log(arr[i]);
                if(arr[i].children.length != 0){
                    this.analysis_dom(arr[i])
                    console.log("-----------------------------------------");
                    console.log(arr[i].children);
                    // 6.4需要解决父元素加入数组问题
                }
                else{
                    console.log(arr[i]+"111");
                    domarr.push(arr[i])
                }
            }
        }
    
        // 处理上方函数转换为数组解耦
        domToArray(){
            
        }
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
