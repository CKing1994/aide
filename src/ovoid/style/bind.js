import React from 'react'

/**
 * 本模块以后端数据为基准
 */

const bind = {
    to(ele, obj) {

    },
    // 数据打包的标签容器
    docker(tag, son, obj) {
        let A = tag
        return <A {...obj}>{son}</A>
    },
    // 根据数据类型选择对应标签
    type() {

    },
    // 
    picking(arr) {
        // ...
        return arr
    }


    //  .BBlist_img    #BBlist_img
    

    // 直接给元素添加样式
    // this.css({
    //     className:""
    // })


    // 给动态添加的元素实时宽度
    // document.querySelector("#person_collection_tab").style.width = parseInt(window.getComputedStyle(O.util.get("Person person_detail li")).width) + "px"

}

export default bind;
