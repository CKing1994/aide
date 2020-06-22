function empty(obj) {
    for (let key in obj) {
        return false;    //非空
    }
    return true;       //为空
}
  
export { empty }
