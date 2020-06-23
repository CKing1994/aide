
const ass = {
    
    getName(who) {
        if(arguments.length===0) who = this
        return who._reactInternalFiber.elementType.name
    }

}

export default ass;