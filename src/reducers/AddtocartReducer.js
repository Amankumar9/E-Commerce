const AddtocartReducer=(state=[],action)=>{

    switch(action.type){
        case "ADDTO_CART":
            return [...state,action.payload]
        default:
            return state
    }
}

export default AddtocartReducer;