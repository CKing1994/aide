import React, { Component } from 'react'

export default class Tag extends Component {
    state = { type: "" }

    map = new Map()

    login(attr) {
        return this.map.get(attr) || {}
    }

    registry() {
        let attr, obj

        // 对象类型
        if (arguments.length === 1) {
            obj = arguments[0]
            if (obj.attr) {
                // 属性对象
                attr = obj.attr
            } else {
                // 普通对象

            }
        }

        //标签类型
        if (arguments.length > 1 && typeof arguments[0] === "string") {
            attr = arguments[0]
            obj = arguments[1]
        }

        if (obj.id === "") {
            let tag_type = this.tags[attr]

            // 设置属性状态以便设置相应id
            let id = this.init_default_id(attr, tag_type)
            obj.id = id
        }
        this.addClassList(attr, obj)
    }
    addClassList(attr, obj) {
        // 将该属性已被注册的classname字符串转换数组后合并成新数组
        if (this.map.get(attr)) {
            let cl = this.map.get(attr).className
            let old_arr = this.str_to_arr(cl)
            console.log(typeof obj.className === "string");

            let new_arr = obj.className
            obj.className = this.merge_arr(old_arr, new_arr)
        }

        if (typeof obj.className === "string") {
            obj.className = obj.className.split(" ")
        }
        obj = this.classname_to_str(obj)
        this.map.set(attr, obj)
    }

    toArr(str) {
        let arr = []
        arr.push(str)
        return arr
    }

    str_to_arr(str) {
        return str.split(" ")
    }

    merge_arr() {
        let arr = arguments[0].concat(arguments[1])
        arr = this.uniq(arr)
        return arr
    }

    id_increase(id) {
        let arr = id.split("_")
        let temp = arr[arr.length - 1]
        return temp
    }

    classname_to_str(obj) {
        for (let x in obj) {
            if (obj[x] instanceof Array) {
                obj[x] = obj[x].join(" ")
                return obj
            }
        }
    }

    // 去除数组中所有该项
    del_arr_all(arr) {
        let new_arr = [];
        arr.map((val, index) => {
            //过滤规则为，不为空串、不为null、不为undefined，也可自行修改
            if (val !== "" && val != undefined) {
                new_arr.push(val);
            }
        });
        return new_arr
    }

    // 数组去重
    uniq(arr) {
        var temp = [];
        for (var i = 0; i < arr.length; i++) {
            if (temp.indexOf(arr[i]) == -1) {
                temp.push(arr[i]);
            }
        }
        return temp;
    }

    attr_tag = new Map()

    key = 0
    create({ type, data, key, id }) {
        if (id) this.attr_tag.set(id, type)
        if (key) this.key = key

        let obj = this.login(id)
        this.add_rank(obj)

        let attr = Object.assign({}, obj)


        if (attr.before_icon) {
            data = [attr.before_icon," ", data]
        }

        this.add_to_tag(type, attr)

        data = data || null

        if (!type) type = "div"

        if (type === "img") {
            attr = Object.assign(attr, { src: data })
            return React.createElement(
                type, attr
            );
        }

        if (type === "li") {
            attr = Object.assign(attr, { key: key })
            return <li {...attr} key={key}>{data}</li>
        }

        return React.createElement(
            type, attr, data
        );
    }


    // 给数据生成的标签添加顺序
    add_rank(obj) {
        if (obj.id) {
            let arr = obj.id.split("_")
            arr[3] = this.key
            arr = this.del_arr_all(arr)
            let str = arr.join("_")
            obj.id = str
        }
    }

    // 给标签添加样式列表并去重
    add_to_tag(type, attr) {
        let tag_class_obj = this.map.get(type)
        if (tag_class_obj) {
            if (!attr.className) {
                attr.className = ""
            }
            attr.className += " " + tag_class_obj.className
            let arr = attr.className.split(" ")
            arr = this.uniq(arr)
            attr.className = arr.join(" ")
            attr = Object.assign(tag_class_obj, attr)
        }
    }

    docker(arr) {
        let obj_arr = []
        arr.map(ele => {
            obj_arr.push(ele)
        })

        let ele_arr = []
        for (let i = 0; i < this.docker_list.length; i++) {
            const ele = this.docker_list[i];
            ele_arr.push({ type: ele.tag, data: obj_arr[i], attr: ele.attr })
        }

        obj_arr = obj_arr.splice(ele_arr.length, obj_arr.length)

        return <>{
            ele_arr.map(ele => {
                let E = ele.type
                return <E {...ele.attr}>{ele.data}</E>
            })
        }
            {obj_arr.map(ele => {
                return <div>{ele}</div>
            })}
        </>
    }

    arr_del(arr, i) {
        let new_arr = []
        for (let j = 0; j < arr.length; j++) {
            if (i === j) {
                continue
            }
            new_arr.push(arr[i])
        }
        return new_arr
    }

    // 获取map长度
    getMapLength(map) {
        return Object.keys(map).length
    }

    temp_map = new Map()
    init_default_id(attr, tag_type) {

        let len = this.getMapLength(this.temp_map) || 0

        let prefix = this.get_ass_name() + "_" + attr + "_" + tag_type

        if (len !== 0) {
            this.temp_map.forEach((value, key) => {
                console.log(value, key);
                if (prefix === key) {
                    this.temp_map.set(prefix, value++)
                } else {
                    this.temp_map.set(prefix, 0)
                }
            });
        } else {
            this.temp_map.set(prefix, 0)
        }

        return prefix + "_"
    }

    get_ass_name() {
        return this._reactInternalFiber.elementType.name
    }
}