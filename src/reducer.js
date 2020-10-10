export const initialState= {
    basket: [

    ],
    user: {},
}

// export const getTotalBasket = (basket) => {
//      let total = 0;
//      basket.forEach(item => {
//          total += item.price;
//      });
//      return total;
//  };

//Selector
export const getBasketTotal = (basket) => basket?.reduce((amount,item) => item.price + amount, 0);

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