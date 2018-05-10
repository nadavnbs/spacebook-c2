
class Api{
    constructor(){
    }
    fetch (){
        return $.ajax({
            method:"GET",
            url:'/posts',
        })
    }
}
let postApi = new Api();
export default postApi