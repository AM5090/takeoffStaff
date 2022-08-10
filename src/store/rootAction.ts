import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "./rootReducer";
import axios from 'axios';

export const LOG_IN = 'LOG_IN';
export interface ILogInAction {
    type: typeof LOG_IN,
    logIn: boolean
}

export const logInAction: ActionCreator<ILogInAction> = (logIn: boolean) => ({
    type: LOG_IN,
    logIn
});

export const CONTACTS = 'CONTACTS';
export interface IContactItem {
    name: string,
    phone: string,
    id: number,
};

export interface IContactsAction {
    type: typeof CONTACTS,
    contacts: IContactItem[],
};

export const contactsAction: ActionCreator<IContactsAction> = (contacts: IContactItem[]) => ({
    type: CONTACTS,
    contacts
})

export const contactsAsyncRequest = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
    axios.get('http://localhost:3001/contacts')
        .then((res) => {
            console.log(res.data);
            dispatch(contactsAction(res.data));
        })
        .catch((error) => {
            console.log(error);
        });
}