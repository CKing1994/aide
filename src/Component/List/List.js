import { Tag } from '../Tag';
import { empty } from '../../ovoid/util/obj';
import Ass from '../Ass'
import React from 'react'

export default class List extends Tag {
    hid = [];
    order = [];
    style = {};
    docker_list = []

    state = {
        ...this.state,
        mapper: [],
    }

    // 筛选相应数据渲染
    isHidden(key) {
        let hid = false
        for (let i = 0; i < this.hid.length; i++) {
            if (key === this.hid[i]) {
                hid = true
            }
        }
        return hid
    }


    sort(obj) {
        let new_obj = {}
        for (let i = 0; i < this.order.length; i++) {
            new_obj[this.order[i]] = obj[this.order[i]]
        }
        return new_obj
    }

    // 将获得的数据对象转换为数组并存放至标签 并校验
    for(obj, father_key) {
        let arr = []

        for (let key in obj) {
            if (this.isHidden(key)) continue

            let tag = this.tags && this.tags[key]

            let A = tag || "div"


            if (father_key) {
                let new_key = father_key + "_" + key

                arr.push(this.create({ type: this.tags[new_key], data: obj[key], id: key }))

                continue
            }

            if (typeof obj[key] === "boolean") {

            }

            let arr_cn;
            if (arguments.length > 2) {
                A = arguments[2]
                console.log(arguments[2])

                arr_cn = arguments[3]
            }


            if (obj[key] == {}) return

            let title = Ass.ass_title
            if (typeof obj[key] === "string" && obj[key].split("-")[0] === title) {
                let id = Number(obj[key].split("-")[1])
                let A = Ass.choice(id)
                arr.push(A)
                continue
            }



            if (obj[key] instanceof Array) {
                let temp_arr = []
                obj[key].map(ele => {
                    if (toString.call(ele) === "[object Object]") {
                        arr.push(<div>{this.for(ele, key)}</div>)
                    } else {
                        if (typeof ele === "number") {

                            // 请求
                            let src = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592389318591&di=daf3d6faa026fcbaebafe0bdf7ad225c&imgtype=0&src=http%3A%2F%2Ffdfs.xmcdn.com%2Fgroup4%2FM09%2F39%2FDE%2FwKgDs1QnaCbDlGcsAABBtg8QVMs944_mobile_large.jpg"

                            // 根据id获取src 额外添加的图片
                            let img = this.addImg(src)
                            
                            
                            temp_arr.push(this.create({ type: A, data: [img], id: key }))
                        } else {
                            if (obj[key] instanceof Array) {
                                temp_arr.push(this.create({ type: A, data: ele, id: key }))
                            } else {
                                arr.push(<div>{this.for(obj[key], null, A, key)}</div>)
                            }
                        }
                    }
                })
                if (temp_arr.length > 0) {
                    arr.push(<div>{temp_arr}</div>)
                }
                continue
            }

            if (toString.call(obj[key]) === "[object Object]" && typeof obj[key] !== "function") {
                arr = [...arr, ...this.for(obj[key])]
                continue
            }

            if (obj[key] && !empty(obj[key])) {
                if (tag === "img") {
                    arr.push(this.create({ type: "img", data: obj[key], id: key }))
                } else {
                    if (arr_cn) {
                        arr.push(this.create({ type: A, data: obj[key], id: arr_cn }))
                        continue
                    }
                    arr.push(this.create({ type: A, data: obj[key], id: key }))
                }
            }
            if (typeof obj[key] === "number") {
                console.log(obj[key]);

                arr.push(this.create({ data: obj[key], id: key }))
            }
        }

        return arr
    }

    addImg(src){
        String.prototype.endWith = function (endStr) {
            var d = this.length - endStr.length;
            return (d >= 0 && this.lastIndexOf(endStr) == d);
        }
        if (typeof src === "string") {
            if (src.endWith(".jpg") || src.endWith(".png")) {
                return this.create({ type: "img", data: src})
            }
        }
    }

    // 数据展开
    mapping(data) {
        this.setState({
            mapper: data.map(ele => {
                ele = this.sort(ele)
                let arr = []
                if(this.splice){
                    arr = this.splice(this.for(ele))
                }else{
                    arr = this.for(ele)
                }
                return this.create({
                    type: "li",
                    data: arr,
                    key: ele.id
                })
            })
        })
    }

    // 添加入列表时排查是否含有重复项
    hasRepeat() {

    }

    data_list = []

    render() {
        return (
            this.docker([this.state.mapper, ...this.data_list])
        )
    }
}
