export const initialState = {
    cart: [
        {
            title: "Gold Raw Ore",
            id: 1,
            img: "https://vignette.wikia.nocookie.net/elderscrolls/images/9/9b/Ore_gold.png/revision/latest?cb=20120513051834",
            description: "Buy my product!!!!",
            price: 3000.50,
        },
        {
            title: "Silver Raw Ore",
            id: 2,
            img: "https://vignette.wikia.nocookie.net/elderscrolls/images/9/9b/Ore_gold.png/revision/latest?cb=20120513051834",
            description: "Buy my product!!!!",
            price: 1000.99,
        },
        {
            title: "Iron Raw Ore",
            id: 3,
            img: "https://vignette.wikia.nocookie.net/elderscrolls/images/9/9b/Ore_gold.png/revision/latest?cb=20120513051834",
            description: "Buy my product!!!!",
            price: 999.50,
        } 
    ],
};

// Gets the total price of the items in the cart.
export const getCartPriceTotal = (cart) =>
    cart?.reduce((amount, item) => item.price + amount, 0);

// This method acts as a router for actions.
const reducer = (state, action) => {
    switch (action.type) {
        // Controll adding item to cart.
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.item],
            }
    
        default:
            return state;
    }
};

export default reducer;