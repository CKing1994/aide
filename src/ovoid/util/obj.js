function empty(obj) {
    for (let key in obj) {
        return false;    //非空
    }
    return true;       //为空
}


function $(str) {
    let father = arguments[1] || document
    return father.querySelector(str)
}

function _(str) {
    let father = arguments[1] || document
    return father.querySelectorAll(str)
}


export { empty, $, _ }
