import React from 'react';
import ChoiceQuestion from './ChoiceQuestion';

const Ass = {
    ass_title:'ass',
    ass:new Map(),
    
    init(){
        this.set(1,<ChoiceQuestion cn={"m2"} /> )
        // map.set(2, <ChoiceQuestion />)
    },
    set(id,ass){
        this.ass.set(id,ass)
    },
    get(id) {
        return this.ass.get(id)
    },
    choice(num) {
        this.init()
        return this.get(num)
    }
}

export default Ass;


// map.forEach(function(key) {
//     console.log("key",key)
// })
