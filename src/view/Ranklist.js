import List from '../Component/List/List'
import hjjp from '../ovoid/http/hjjp'

export default class Ranklist extends List {
    tags = {
        id: "span",
        name: "span",
        point: "b",
        portrait:"img",
    }

    order = ["id", "name","point","portrait"]

    // 框架注意事项
    // 1：属性改变驱动的优点是直接配置，缺点是当祖辈的状态因后辈setState更改时该属性不会动态更改

    componentDidMount() {
        
        this.registry("li", {
            className: "rank_li"
        })

        this.registry({
            attr: "id",
            className: "rank_id"
        })

        this.registry({
            attr: "name",
            className: "rank_name"
        })

        this.registry("span", {
            className: "rank_span"
        })

        this.registry("b", {
            className: "rank_b"
        })

        this.registry("img", {
            className: "rank_img"
        })

        this.docker_list = [
            {
                tag: "ul", attr: {
                    id: "ranklist",
                    className: "rank_ul"
                }
            },
        ]
        
        hjjp('config.json',res => {
            this.mapping(res.data.view.Rank_list.data)
        })
    }
}
