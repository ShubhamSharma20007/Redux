import { ADD_TO_CARD } from "../Constants"
const intialState = {
    cardData: []
}
export default function cardItems(state = intialState, action) {
    switch (action.type) {

        case ADD_TO_CARD:
            console.log(action)
            return {
                ...state,
                cardData: action.payload
            }
            break;
        default:
            return state;
    }
}