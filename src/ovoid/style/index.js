
const style = {

    // 玄武门之变 ele李渊 killer李世民 dead李建成李元吉
    add(ele, killer, dead) {
        let arr = ele.className.split(" ")
        let has = false
        arr.map((ele,i) => {
            if (ele === killer) {
                has = true
            }
            if (ele === dead) {
                arr.splice(i,1)
            }
        })
        if (!has) ele.className = arr.join(" ") + " " + killer
    }
}

export default style;