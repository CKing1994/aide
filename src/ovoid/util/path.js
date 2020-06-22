const path = {
    get(){
        return window.location.pathname
    },
    check(url) {
        return this.get() === url
    }
}

export default path