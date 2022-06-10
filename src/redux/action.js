export const ADD_DATA = 'ADD_DATA'
export const DELETE_DATA = 'DELETE_DATA'


export const addDataAction = payload => {
    return {
        type: ADD_DATA,
        payload
    }
}

export const deleteDataAction = payload => {
    return {
        type: DELETE_DATA,
        payload
    }
}

