import React, { Component } from 'react'




export default class Silder extends Component {

    animate(obj, target, callback) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            let step = (target - obj.offsetLeft) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            if (obj.offsetLeft == target) {
                clearInterval(obj.timer);
                if (callback) {
                    callback();
                }
            }
            obj.style.left = obj.offsetLeft + step + 'px';
        }, 15);
    }

    state = {
        data: null
    }

    // show_arrow() {
    //     left.style.display = 'block';
    //     right.style.display = 'block';
    //     clearInterval(timer);
    //     timer = null;
    // }

    // hide_arrow() {
    //     left.style.display = 'none';
    //     right.style.display = 'none';
    //     timer = setInterval(function () {
    //         right.click();
    //     }, 2000)
    // }

    // pointer_active() {
    //     ol.children[i].className = '';
    //     this.className = 'current';
    // }

    // lr_arrow_cilck() {
    //     if(flag){
    //         flag = !flag;
    //         if (num == ul.children.length - 1) {
    //             ul.style.left = 0;
    //             num = 0;
    //         }
    //         num++;
    //         animate(ul, -num * lbtwidth, function(){
    //             flag = !flag;
    //         });
    //         circle++;
    //         if (circle == ol.children.length) {
    //             circle = 0;
    //         }
    //         change();
    //     }
    // }

    slider_content(str) {
        console.log(this.state.data);
        
        if (str === "content") {
            console.log(this.state.data);
            
            return this.state.data.map(ele=>{
                return <li><img src={ele.src}/></li>
            })
        }

        if (str === "pointer") {
            return this.state.data.map(ele=>{
                return <li onMouseMove={() => {

                }}></li>
            })
        }
    }

    mapping(data) {
        this.setState({
            data:data
        })
    }

    // change() {
    //     for (i = 0; i < ol.children.length; i++) {
    //         ol.children[i].className = '';
    //         ol.children[circle].className = 'current';
    //     }
    // }

    render() {
        return (
            <div className="lbt">
                <button className="left">{"<"}</button>
                <button className="right">{">"}</button>
                <ul>
                    {this.state.data && this.slider_content("content")}
                </ul>
                <ol>
                    {this.state.data && this.slider_content("pointer")}
                </ol>
            </div>
        )
    }
}
