function keypress(who){
    window.onkeydown = e => {
        e = e || window.event;
        if (window.event) {
          if(who.state.key){
            e.preventDefault()
            if (e.keyCode === 27) {
              e.preventDefault()
              who.setState({
                key: false,
                open:true
              })
              who.change()
            }
          }
          else{
            if (e.keyCode === 70 && e.ctrlKey) {
              e.preventDefault()
              who.setState({
                key: true,
                open:false
              })
              who.change()
            }
          }
        }
        // else if (e.which) {}
      }
    
}

export default keypress