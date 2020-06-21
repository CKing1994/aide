// 总体流程 
// 1 前端收到来自后端的数据结构后在handle中转换为前端需要的html层级格式内容
// 2 数据整理完毕后通过Tag List渲染在页面中并添加id与classname
// 3 添加样式与处理事件 






// 将用户的数据data切分成动态与静态 区分其需要动态渲染的数据 其中动态元素由handle_data处理
// 后期一些静态属性能转换为动态 如前期name sex local等为前期静态元素

// 动态样式
cn = {
    name: "BB_list",
    style:{

    },
    pos:"", // pos决定html的层级关系  
    child: {
        name: "",
        style: {
            fontWeight: 900,
            fontSize: 20,
        },
    }
}

// 解析数据坐标List组件（使用数组）原list组件现为handle_data
// 解析DOM HTML结构转换为obj对象（尽量不使用数组）