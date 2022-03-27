const CartReducer=(state=[],action)=>{

    switch(action.type){
        case "ADDTO_CART":
            return [...state,action.payload]
        case "REMOVEFROM_CART":
            return state.filter((_,id)=>id!==action.payload)
        case "CLEAR_CART":
            return state=[]
        default:
            return state
    }
}

export default CartReducer;