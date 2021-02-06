import React, { createContext, useContext, useReducer, useCallback } from 'react';
import initialState from './state';
import reducer from './reducer';

const AppContext = createContext();

export const useApp = () => useContext(AppContext);

export const AppProvider = props => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleBar = useCallback(() => dispatch({type: 'HANDLE_BAR'}), []);

    const action = { handleBar };

    return (
        <AppContext.Provider value={{state, action}}>
            {props.children}
        </AppContext.Provider>
    );
};