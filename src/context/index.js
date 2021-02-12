import React, { createContext, useContext, useReducer, useCallback } from 'react';
import initialState from './state';
import reducer from './reducer';

const AppContext = createContext();

export const useApp = () => useContext(AppContext);

export const AppProvider = props => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleBar = useCallback(() => dispatch({type: 'HANDLE_BAR'}), []);
    const handleSearch = useCallback(event => dispatch({ type: 'HANDLE_SEARCH', payload: event.target.value }), []);
    const handleAddBasket = useCallback(item => dispatch({ type: 'ADD_BASKET', payload: item }), []);
    const handleRemoveBasket = useCallback(item => dispatch({type: 'REMOVE_BASKET', payload: item}), []);

    const action = {
        handleBar,
        handleSearch,
        handleAddBasket,
        handleRemoveBasket
    };

    return (
        <AppContext.Provider value={{state, action}}>
            {props.children}
        </AppContext.Provider>
    );
};