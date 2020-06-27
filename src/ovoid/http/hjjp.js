import axios from "axios";


const hjjp = (url,fn,err) => axios.get(url).then(fn).catch(err)

export default hjjp;