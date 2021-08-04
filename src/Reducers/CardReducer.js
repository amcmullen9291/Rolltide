  
import { ActionTypes } from '../Constants/Action.type';
import concatenateReducers from 'redux-concatenate-reducers';

const initialState = {
    Cards: [],
};

export const CardReducer = (state=initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_CARDS:
            return { ...state, deck: payload};
        default:
            return state
    }
};

export const CreateCardReducer = concatenateReducers([
    (state={}, {type, payload}) => {
        switch (type) {
            case ActionTypes.CREATE_CARD:
                const Cards = state.Cards;
                const newCard = payload;
                return { ...state, Cards: Cards + newCard };
            default:
                return state;
        }
    }
    ])