let obj = {}

const keypress = {
    register: function (num, fn) {
        if (num instanceof Array) {
            num = num.join(" ")
        }
        if (!obj[num]) {
            obj[num] = []
        }
        obj[num].push(fn)
    },
    init() {
        window.onkeydown = (e) => {
            e = e || window.event;
            for (const key in obj) {
                let arr = key.split(" ")
                let is = false
                if(arr.length===1) {
                    is = (e.keyCode === parseInt(key))
                }else{
                    if(arr[0]==="ctrl" || arr[1]==="ctrl"){
                        is = (e.keyCode === parseInt(key) && e.ctrlKey)
                    }
                }

                if (is) {
                    obj[key].map(ele => ele(e))
                }
            }
        }
    }
}

export default keypress



// 回车事件
// input、button


