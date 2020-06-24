import ass from './ass'
import arr from './arr'

const ref = {
    refs: {

    },
    register(who) {
        let str = ass.getName(who)
        this.refs[str] = who.refs
        this.refs[str].get = function (name) {
            return this[name]
        }
    },
    get(str) {
        let arr = str.split(" ")

        let who = arr[0] //获取的组件
        let name = arr[1] //寻位的ref
        if (typeof who !== "string") {
            who = ass.getName(who)
        }

        let ele = this.refs[who][name]

        if (arr.length > 2) {
            let temp = arr.splice(2, arr.length - 2)
            for (let i = 0; i < temp.length; i++) {
                if (temp[i].startWith("#")) {
                        if(ele.children){
                        console.log(ele.children);
                            return this.getDom(ele.children, temp[i])
                        }
                    // 如果没有 则退到上一层可行处
                    if (ele.querySelector(temp[i])) {
                        ele = ele.querySelector(temp[i])
                    } else {
                        return this.getDom(ele.children, temp[i])
                    }
                }else if(temp[i].startWith(".")){
                    if(ele.querySelector(temp[i])){
                        ele = ele.querySelectorAll(temp[i])
                    } else {
                        return this.getDom(ele.children, temp[i])
                    }
                }               
                else {
                    // 如果没有 则退到上一层可行处
                    if (ele.querySelectorAll(temp[i]) || ele instanceof Array) {
                        ele = ele.querySelectorAll(temp[i])
                        console.log(ele);

                        for (let j = 0; j < ele.length; j++) {
                            ele = ele[j]
                        }
                    }

                }
            }
        }
        
        return ele
    },
    getDom(ele, id) {
        let length = ele.length
        let children = ele.children

        if (length) {
            for (let i = 0; i < length; i++) {
                const element = ele[i];
            console.log(id);
            console.log(element);
                if(element.getAttribute("id") === id){
                    return element
                }else{
                    return this.getDom(element.children,id)
                }
            }
            return
        } else if (children) {
            
            if (!arr.isEmpty(ele.querySelectorAll(id))) {
                return ele.querySelectorAll(id)
            }
            return
        } else if (arr.isEmpty(ele)) {
            return
        } else if (!arr.isEmpty(ele.querySelectorAll(id))) {
            return ele.querySelectorAll(id)
        }
    }
}

export default ref;