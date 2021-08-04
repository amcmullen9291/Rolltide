import { ActionTypes } from '../Constants/Action.type';
export const setCards = (deck) => {
    return {
        type: ActionTypes.SET_CARDS,
        payload: deck,
    }
}


export const createCard = (card) => {
    return {
        type: ActionTypes.CREATE_ENTRY,
        payload: card
    }
}
