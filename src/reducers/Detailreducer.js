const Detailreducer=(state={} , action)=>{
    switch(action.type){
        case 'GET_PRODUCT_DETAILS':
            state=action.payload
            return state
        default:
            return state
    }
}

export default Detailreducer;