import { Reducer } from "redux";
import { CONTACTS, IContactItem, IContactsAction, ILogInAction, ILogInTouchedAction, LOG_IN, LOG_IN_TOUCHED } from "./rootAction";

export interface RootState {
    logInTouched: boolean;
    logIn: boolean;
    contacts: IContactItem[];
}

const initialState: RootState = {
    logInTouched: false,
    logIn: false,
    contacts: []
}

type AllAction = ILogInAction 
    | ILogInTouchedAction
    | IContactsAction;

export const rootReducer: Reducer<RootState, AllAction> = (state = initialState, action) => {
    switch(action.type) {
        case LOG_IN:
            return {
                ...state, 
                logIn: action.logIn
            };
        case LOG_IN_TOUCHED:
            return {
                ...state,
                logInTouched: action.logInTouched
            }
        case CONTACTS:
            return {
                ...state,
                contacts: action.contacts
            }
        default:
            return state;
    }
}