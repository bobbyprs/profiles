const reducer=(state={},action)=>{
    switch (action.type){
        case 'INIT_UPDATE':{
            return {
                userprofile:action.payload
            }
        }
        default : {
            return state
        }
    }
}
export default reducer