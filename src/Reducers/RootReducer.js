import { combineReducers } from 'redux';
import { CardReducer, CreateCardReducer } from './CardReducer';

const RootReducer = combineReducers({
    Cards: CardReducer,
    newCard: CreateCardReducer
});

export default RootReducer;