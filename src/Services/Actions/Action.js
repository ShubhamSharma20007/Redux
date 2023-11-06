import { ADD_TO_CARD } from "../Constants"
export const addToCard = (data) => {
    console.log(data)
    return {
        type: ADD_TO_CARD,
        paload: data
    }
}

// export const removeFromCard = (data)=>{
//     return{
//         type :'REMOVE_FROM_CARD',
//         payload :data
//     }
// }