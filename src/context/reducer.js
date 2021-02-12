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
        case 'ADD_BASKET':
            return {
                ...state,
                basket: [
                    ...state.basket,
                    action.payload
                ]
            }
        case 'REMOVE_BASKET':
            return {
                ...state,
                basket: state.basket.filter(item => {
                    return item.name !== action.payload.name
                })
            }
        default:
            throw new Error();
    }
};

export default reducer;