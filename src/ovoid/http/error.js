
const path = {
    un_login:"/login"
}

const error = {
    // 状态码
    code:{
        // 未登录
        un_login:666
    },
    kick(res) {
        if (res.code === this.code.un_login) {
            location.pathname = path.un_login
        }
    }
}

export default error

