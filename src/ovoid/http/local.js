const local = {
    set(view,name,content){
        let obj = {}
        if(typeof content === "number"){
            obj[name] = content
        }
        // 转换字符串
        let str = JSON.stringify(obj)
        localStorage.setItem(view,str)
    },
    get(view) {
        // 转换成对象
        return JSON.parse(localStorage.getItem(view))
    },

    clear() {

    },

    
}

export default local