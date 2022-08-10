import { Reducer } from "redux";
import { CONTACTS, IContactItem, IContactsAction, ILogInAction, LOG_IN } from "./rootAction";

export interface RootState {
    logIn: boolean;
    contacts: IContactItem[];
}

const initialState: RootState = {
    logIn: false,
    contacts: []
}

type AllAction = ILogInAction 
    | IContactsAction;

export const rootReducer: Reducer<RootState, AllAction> = (state = initialState, action) => {
    switch(action.type) {
        case LOG_IN:
            return {
                ...state, 
                logIn: action.logIn
            };
        case CONTACTS:
            return {
                ...state,
                contacts: action.contacts
            }
        default:
            return state;
    }
}