export const initialState = {
    cart: [
        {
            title: "Gold Raw Ore",
            id: 1,
            img: "https://vignette.wikia.nocookie.net/elderscrolls/images/9/9b/Ore_gold.png/revision/latest?cb=20120513051834",
            description: "Gold ore, ready for refinment.",
            price: 3000.50,
        },
        {
            title: "Silver Raw Ore",
            id: 2,
            img: "https://vignette.wikia.nocookie.net/elderscrolls/images/9/9b/Ore_gold.png/revision/latest?cb=20120513051834",
            description: "Silver ore, ready for refinment.",
            price: 1000.99,
        },
        {
            title: "Iron Raw Ore",
            id: 3,
            img: "https://vignette.wikia.nocookie.net/elderscrolls/images/9/9b/Ore_gold.png/revision/latest?cb=20120513051834",
            description: "Iron ore, ready for refinment.",
            price: 999.50,
        } 
    ],
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

        case "EMPTY_BASKET":
            return {
                ...state,
                basket: []
            }
        
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