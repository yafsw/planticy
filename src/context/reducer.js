const reducer = (state, action) => {
    switch (action.type) {
        case 'HANDLE_BAR':
            return {
                ...state,
                bar: !state.bar
            };
        case 'HANDLE_SEARCH':
            return {
                ...state,
                search: action.payload
            };
        default:
            throw new Error();
    }
};

export default reducer;