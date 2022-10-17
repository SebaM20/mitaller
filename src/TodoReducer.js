import React from 'react'

export const TodoReducer = (initialState, action) => {
    switch (action.type) {
        case 'ABC':
        throw new Error('action not yet implementd')
        break;

        default:
            return initialState;
    }
}
