export const initialState = {
    cart: [],
};

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