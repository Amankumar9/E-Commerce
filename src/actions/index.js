const GetProduct = () => {
    return (dispatch) => {
        fetch(
            
           `https://v1.nocodeapi.com/mysteryman/airtable/KRKHncNqtcKsbsBM?tableName=products`
        ).then(res => res.json())
            .then(data => {
                dispatch({
                    type: "GET_PRODUCTS",
                    payload: data.records,
                })
            })

    }
}
const GetProductDetails = (id) => {

    return (dispatch) => {
        fetch(`https://v1.nocodeapi.com/mysteryman/airtable/KRKHncNqtcKsbsBM?tableName=products&id=${id}`)
            .then(res => res.json())
            .then(datas => {
                dispatch({
                    type: "GET_PRODUCT_DETAILS",
                    payload: datas.fields
                })
            })

    }
}

const AddtoCart = (item,qty) => {
    return {
        type: "ADDTO_CART",
        payload: {item,qty}
    }
}

const RemovefromCart = (id) => {
    return {
        type: "REMOVEFROM_CART",
        payload: id,
    }
}

const ClearCart=()=>{
    return{
        type:"CLEAR_CART"
    }
}


 
export { GetProductDetails, GetProduct, AddtoCart, RemovefromCart,ClearCart }