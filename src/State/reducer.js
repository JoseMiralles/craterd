export const initialState = {
    cart: [],
    user: null,
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
            };

        case "EMPTY_CART":
            return {
                ...state,
                cart: [],
            };
        
        case "REMOVE_FROM_CART":
            // Find the index of the first item that matches the given id.
            const index = state.cart.findIndex(
                (cartItem) => cartItem.id === action.id
            );
            let newCart = [...state.cart];
            if (index >= 0){
                newCart.splice(index, 1);
            }
            else
            {
                console.warn(
                    `Item with id of ${action.id} is not in the cart!`
                );
            }
            return{
                ...state,
                cart: newCart,
            }
            
        case "SET_USER":
            // Set user state as authenticated.
            return {
                ...state,
                user: action.user
            };

    
        default:
            return state;
    }
};

export default reducer;