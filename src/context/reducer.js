const reducer = (state, action) => {
    switch (action.type) {
        case 'HANDLE_BAR':
            return {
                ...state,
                bar: !state.bar
            };
        default:
            throw new Error();
    }
};

export default reducer;