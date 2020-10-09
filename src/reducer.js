export const initialState= {
    basket: [],
    lastAddedItem: '',
}

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
                lastAddedItem: action.title,
            };
        default:
            return state;
    }

};

export default reducer;