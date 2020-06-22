const arr = {

    // 删除数组重复项
    del_repeat(arr){
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] === arr[j]) {
                    arr.splice(j, 1)
                    j--
                }
            }
        }
        return arr
    }
}

export default arr