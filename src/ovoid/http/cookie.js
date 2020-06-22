
const cookie = {
    cookie: document.cookie,
    setCookie(name, value, dead_line) {
        let exdate = new Date();
        exdate.setDate(exdate.getMonth() + dead_line);
        let expires = dead_line == null ? "" : ";expires=" + exdate.toGMTString()
        this.cookie = `${name}=${escape(value)}${expires}`
    },
    getCookie(name) {
        if (this.cookie.length > 0) {
            let start_on = this.on(name + "=")
            if (start_on !== -1) {
                start_on += (name.length + 1)
                let end_on = this.on(";", start_on)
                if (end_on === -1) {
                    end_on = this.cookie.length
                }
                return unescape(this.cookie.substring(start_on, end_on))
            }
        }
        return null
    },
    on() {
        return this.cookie.indexOf(arguments)
    }
}

export default cookie
