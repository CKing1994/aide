
const disable = {
    
    // 页面禁止文字选中
    text(ele){
        if(document.all){
            //for ie
            ele.onselectstart= function(){return false;};
        }else{
            ele.onmousedown= function(){return false;};
            ele.onmouseup= function(){return true;};
        }
        document.onselectstart = function(e){
            e.returnValue=false;
        }
    }
}

export default disable;