import {ADD_DATA, DELETE_DATA} from "../action";

const initialState = []

export function reducer(state = initialState, action) {
    switch (action.type) {

        case ADD_DATA:
            return action.payload

        case DELETE_DATA:
            return action.payload

        default:
            return state
    }
}