export const initialState= {
    basket: [
        {
            id: "123456789",
image: "https://m.media-amazon.com/images/I/71Gb8-pk2VL._AC_UY436_FMwebp_QL65_.jpg",
price: 29.99,
rating: 5,
title: "Echo Dot 4. Generation + Uhranzeige | Blaugrau",
        },
        {
            id: "123456789",
image: "https://m.media-amazon.com/images/I/71Gb8-pk2VL._AC_UY436_FMwebp_QL65_.jpg",
price: 29.99,
rating: 5,
title: "Echo Dot 4. Generation + Uhranzeige | Blaugrau",
        },
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