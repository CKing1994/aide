import style from "../style"

const map = {

    // 获取map长度
    getMapLength(map) {
        return Object.keys(map).length
    },

    // 排他思想
    exclusive(dad, id, unactive, active) {
        for (let i = 0; i < dad.children.length; i++) {
            style.add(dad.children[i], unactive,active)
        }
        style.add(dad.children[id], active,unactive)
    }
}

export default map